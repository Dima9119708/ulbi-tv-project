import { createStore } from 'shared/config/store/store';
import { User } from '../types';

const userStore = createStore<User>((() => ({
})));

export const userActions = {
    test: userStore.getState(),
};
