import { createStore } from 'shared/config/store/store';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { api } from 'shared/api/api';
import { actionLoading } from 'shared/hooks/useLoading';
import {
    ProfileSchema, User, UserSchema,
} from '../types';

export const userStore = createStore<UserSchema & ProfileSchema>(((set) => ({
    authData: null,
    profile: null,
    profileReadonly: true,
    setReadonly: (flag) => {
        set((draft) => {
            draft.profileReadonly = flag;
        });
    },
    updateProfile: async (data) => {
        actionLoading.set(true);

        try {
            const res = await api.put('/profile', data);

            if (res.data) {
                set((draft) => {
                    draft.profile = res.data;
                    draft.profileReadonly = true;
                });
            }

            return res.data;
        } catch (e) {
            return {};
        } finally {
            actionLoading.set(false);
        }
    },
    getProfile: async () => {
        try {
            const res = await api.get('/profile');

            if (res.data) {
                set((draft) => {
                    draft.profile = res.data;
                });
            }

            return res.data;
        } catch (e) {
            return {};
        } finally {
            actionLoading.set(false);
        }
    },
    setAuthData: (authData: User) => {
        set((draft) => {
            draft.authData = authData;
        });
    },
    initAuth: () => {
        const authData = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) || '');

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

export const getIsAuth = userStore.selector((state) => !!state.authData);
