import { createStore, useSingleStore } from 'shared/config/store/store';
import { useEffect } from 'react';

interface TError {
    error: string,
    set: (flag: string) => void
    clear: () => void
}

const storeError = createStore<TError>((set) => ({
    error: '',
    clear: () => {
        set((draft) => {
            draft.error = '';
        });
    },
    set: (message: string) => {
        set((draft) => {
            draft.error = message;
        });
    },
}));

const actionError = storeError.actions;

const useError = () => {
    const {
        error,
        clear,
    } = useSingleStore(storeError, (state) => state);

    useEffect(() => () => {
        clear();
    }, [clear]);

    return error;
};

export {
    actionError,
    useError,
};
