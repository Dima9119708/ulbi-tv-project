import { useEffect } from 'react';
import { useNavigate, To, NavigateOptions } from 'react-router-dom';
import { EnumRoutesName, RoutesPath } from 'shared/config/routes/routes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { NavigateFunction } from 'react-router/dist/lib/hooks';

export interface INavigate {
    to: To,
    delta: number,
    options?: NavigateOptions
    paths: Record<EnumRoutesName, string>
    go: NavigateFunction
}

const navigateStore = create<INavigate, [['zustand/immer', never]]>(immer(((set) => ({
    to: null,
    delta: null,
    options: null,
    paths: RoutesPath,
    go: (to: To | number, options?: NavigateOptions) => {
        set((draft) => {
            if (typeof to === 'number') {
                draft.delta = to;
                return;
            }

            draft.to = to;
            draft.options = options;
        });
    },
}))));

const navigate = {
    subscribe: navigateStore.subscribe,
    ...navigateStore.getState(),
};

const useIntegrateRouterWithStore = () => {
    const nav = useNavigate();

    useEffect(() => {
        const unSubscribe = navigate.subscribe(({ to, delta, options } : INavigate) => {
            if (delta) {
                nav(to);
            } else {
                nav(to, options);
            }
        });

        return () => unSubscribe();
    }, [nav]);
};

export {
    navigate,
    useIntegrateRouterWithStore,
};
