import { StateCreator } from 'zustand';
import {
    Mutate, StoreApi,
    StoreMutatorIdentifier,
} from 'zustand/vanilla';

type Write<T extends object, U extends object> = Omit<T, keyof U> & U

type Cast<T, U> = T extends U ? T : U

type TSelector<T> = <R>(fn: (state: T) => R) => (state: T) => R;

type TImpl = <
    T extends unknown,
    Mps extends [StoreMutatorIdentifier, unknown][] = [],
    Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
    f: StateCreator<T, [...Mps, ['selector', TSelector<T>]], Mcs>,
) => StateCreator<T, Mps, [['selector', TSelector<T>], ...Mcs]>

declare module 'zustand' {
    interface StoreMutators<S, A> {
        selector: Write<Cast<S, object>, { selector: A }>
    }
}

type ImplFn = <T>(f: StateCreator<T, [], []>) => StateCreator<T, [], []>

const actions: ImplFn = (initializer) => (set, get, api) => {
    type T = ReturnType<typeof initializer>

    const storeApi = api as Mutate<StoreApi<T>, [['selector', TSelector<T>]]>;

    storeApi.selector = (state) => state;

    return initializer(set, get, api);
};

const selectorMiddleware = actions as unknown as TImpl;

export {
    TSelector,
    selectorMiddleware,
};
