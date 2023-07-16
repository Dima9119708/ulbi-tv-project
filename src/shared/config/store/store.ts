import { create, StateCreator, UseBoundStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import {
    EqualityChecker,
    Mutate,
    StateSelector,
    StoreApi,
    StoreMutatorIdentifier,
} from 'zustand/vanilla';

export const createStore = <State extends Record<string, any>>(fn: StateCreator<State, [['zustand/immer', never], ['zustand/devtools', never]]>) => create<State, [['zustand/immer', never], ['zustand/devtools', never]]>(immer(devtools(fn)));

export const useSingleStore = <State, Result, Mos extends [StoreMutatorIdentifier, unknown][] = []> (
    fn: UseBoundStore<Mutate<StoreApi<State>, Mos>>,
    selector?: StateSelector<State, Result>,
    equal: EqualityChecker<Result> = shallow,
) => fn(selector, equal);
