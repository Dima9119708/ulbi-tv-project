import { create, StateCreator, UseBoundStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import {
    Mutate,
    StoreApi,
    StoreMutatorIdentifier,
} from 'zustand/vanilla';
import { getOnlyFunctionsAndSetInStoreApi, FunctionsFromStore } from 'shared/config/store/middleware/actions';

type TMiddleware <State> = [
    ['zustand/immer', never],
    ['zustand/devtools', never],
    ['actions', FunctionsFromStore<State>],
]

export const createStore = <State extends Record<string, any>>
    (fn: StateCreator<State, TMiddleware<State>>) => create<State, TMiddleware<State>>((
        immer(
            devtools(
                (
                    getOnlyFunctionsAndSetInStoreApi(fn)
                ),
            ),
        )
    ));

export const useSingleStore = <State, Result, Mos extends [StoreMutatorIdentifier, unknown][] = []> (
    fn: UseBoundStore<Mutate<StoreApi<State>, Mos>>,
    selector?: (s: State) => Result,
    equal: (a: Result, b: Result) => boolean = shallow,
) => fn(selector, equal);
