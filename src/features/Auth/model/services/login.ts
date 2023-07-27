import { createStore } from 'shared/config/store/store';
import axios from 'axios';
import { LoginSchema, ISubmitFormData } from 'features/Auth/types';
import { userActions } from 'entity/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { api } from 'shared/api/api';

export const login = createStore<LoginSchema>((set) => ({
    isLoading: false,
    error: '',
    async auth(data: ISubmitFormData) {
        set((draft) => {
            draft.isLoading = true;
        });

        try {
            const res = await api.post('/login', data);

            if (res.data) {
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
                userActions.setAuthData(res.data);
            }
        } catch (e) {
            set((draft) => {
                draft.error = e.response.data.message;
            });
        } finally {
            set((draft) => {
                draft.isLoading = false;
            });
        }
    },
}));

export const loginActions = login.actions;
