import { createStore } from 'shared/config/store/store';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types';

export const userStore = createStore<UserSchema>(((set) => ({
    setAuthData: (authData: User) => {
        set((draft) => {
            draft.authData = authData;
        });
    },
    initAuth: () => {
        const authData = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));

        if (authData) {
            set((draft) => {
                draft.authData = authData;
            });
        }
    },
    logout: () => {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        set((draft) => {
            draft.authData = undefined;
        });
    },
})));

export const userActions = userStore.actions;
