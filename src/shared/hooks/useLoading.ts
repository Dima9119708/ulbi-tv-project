import { createStore, useSingleStore } from 'shared/config/store/store';
import { useEffect } from 'react';

type TReturnLoading<T extends Record<string, boolean>> = { [K in keyof T]: boolean };

interface TStore {
    groupsLoading: Record<string, boolean>,
    set: (flag: boolean, field?: string) => void
    clear: () => void
}

const storeLoading = createStore<TStore>((set) => ({
    groupsLoading: {},
    clear: () => {
        set((draft) => {
            draft.groupsLoading = {};
        });
    },
    set: (flag, field = 'isLoading') => {
        set((draft) => {
            draft.groupsLoading[field] = flag;
        });
    },
}));

const actionLoading = storeLoading.actions;

function useLoading(flag?: boolean): boolean;
function useLoading<T extends Record<string, boolean>>(fields: T): TReturnLoading<T>;
function useLoading<T extends Record<string, boolean>>(fields?: T) {
    const {
        clear,
        isLoading,
        ...loadings
    } = useSingleStore(storeLoading, (state) => {
        if (!fields || typeof fields === 'boolean') {
            return {
                clear: state.clear,
                isLoading: state.groupsLoading.isLoading ?? fields ?? false,
            };
        }

        return {
            clear: state.clear,
            ...Object.keys(fields).reduce((acc, field) => {
                Object.assign(acc, {
                    [field]: state.groupsLoading[field] ?? fields[field],
                });
                return acc;
            }, {}),
        };
    });

    useEffect(() => () => {
        clear();
    }, [clear]);

    return !fields || typeof fields === 'boolean' ? isLoading : loadings;
}

export {
    actionLoading,
    useLoading,
};
