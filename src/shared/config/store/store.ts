import { create, StateCreator, useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import {
    StoreApi,
} from 'zustand/vanilla';
import { actionsMiddleware, FunctionsFromStore } from 'shared/config/store/middleware/actions';
import { selectorMiddleware, TSelector } from 'shared/config/store/middleware/selector';

type TMiddleware <State> = [
    ['zustand/immer', never],
    ['zustand/devtools', never],
    ['actions', FunctionsFromStore<State>],
    ['selector', TSelector<State>],
]

export const createStore = <State extends Record<string, any>>
    (fn: StateCreator<State, TMiddleware<State>>) => create<State, TMiddleware<State>>((
        immer(
            devtools(
                (
                    actionsMiddleware(
                        selectorMiddleware(
                            fn,
                        ),
                    )
                ),
            ),
        )
    ));

export const useSingleStore = <State, Result> (
    api: StoreApi<State>,
    selector: (s: State) => Result,
    equal: (a: Result, b: Result) => boolean = shallow,
) => useStore(api, selector, equal);
