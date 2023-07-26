import { useEffect } from 'react';
import { useNavigate, To } from 'react-router-dom';
import { EnumRoutesName, RoutesPath } from 'shared/config/routes/routes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface INavigate {
    to: To | -1,
    paths: Record<EnumRoutesName, string>
    go: (url: To | -1) => void
}

const navigateStore = create<INavigate, [['zustand/immer', never]]>(immer(((set) => ({
    to: null,
    paths: RoutesPath,
    go: (url) => {
        set((draft) => {
            draft.to = url;
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
        const unSubscribe = navigate.subscribe(({ to } : INavigate) => {
            if (to === -1) {
                nav(to);
            } else {
                nav(to);
            }
        });

        return () => unSubscribe();
    }, [nav]);
};

export {
    navigate,
    useIntegrateRouterWithStore,
};
