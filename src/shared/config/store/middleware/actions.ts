import { StateCreator } from 'zustand';
import {
    Mutate,
    StoreApi, StoreMutatorIdentifier,
} from 'zustand/vanilla';

type Write<T extends object, U extends object> = Omit<T, keyof U> & U

type Cast<T, U> = T extends U ? T : U

type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type FunctionsFromStore<T> = Pick<T, FunctionPropertyNames<T>>;

type Foo = <
    T extends unknown,
    Mps extends [StoreMutatorIdentifier, unknown][] = [],
    Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
    f: StateCreator<T, [...Mps, ['actions', FunctionsFromStore<T>]], Mcs>,
) => StateCreator<T, Mps, [['actions', FunctionsFromStore<T>], ...Mcs]>

declare module 'zustand' {
    interface StoreMutators<S, A extends FunctionsFromStore<S>> {
        actions: Write<Cast<S, object>, { actions: A }>
    }
}

type FooImpl = <T>(f: StateCreator<T, [], []>) => StateCreator<T, [], []>

const actions: FooImpl = (initializer) => (set, get, api) => {
    type T = ReturnType<typeof initializer>

    const initState: Record<string, any> = initializer(set, get, api);

    const storeApi = api as Mutate<StoreApi<T>, [['actions', FunctionsFromStore<T>]]>;

    Object.keys(initState).forEach((key) => {
        if (typeof initState[key] === 'function') {
            storeApi.actions = {
                ...storeApi.actions,
                [key]: initState[key],
            };
        }
    });

    return initializer(set, get, storeApi);
};

const getOnlyFunctionsAndSetInStoreApi = actions as unknown as Foo;

export {
    FunctionsFromStore,
    getOnlyFunctionsAndSetInStoreApi,
};
