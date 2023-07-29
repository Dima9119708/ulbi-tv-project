import { createStore, useSingleStore } from 'shared/config/store/store';
import { EnumVariantTheme, ITheme, IThemeProps } from '../types';

export const themeStore = createStore<ITheme>((set, get) => ({
    nameTheme: EnumVariantTheme.LIGHT,
    init: () => {
        const savedThemeName = localStorage.getItem('themeName') || EnumVariantTheme.LIGHT;

        get().onChange(savedThemeName as EnumVariantTheme);
    },
    onChange: (name: EnumVariantTheme) => {
        localStorage.setItem('themeName', name);
        document.body.setAttribute('data-theme', name);

        set((draft) => {
            draft.nameTheme = name;
        });

        if (__IS_DEV__) {
            const $link: HTMLLinkElement | null = document.head.querySelector(`[data-theme="${name}"]`);

            if ($link === null) {
                const nodeLink = document.createElement('link');
                nodeLink.rel = 'stylesheet';
                nodeLink.setAttribute('data-theme', name);
                nodeLink.href = `/public/${name}.css`;

                document.head.append(nodeLink);
            }
        } else {
            (async () => {
                const res = await fetch('/manifest.json');
                const manifest = await res.json();

                const $link: HTMLLinkElement | null = document.head.querySelector(`[data-theme="${name}"]`);

                if ($link === null) {
                    const nodeLink = document.createElement('link');
                    nodeLink.rel = 'stylesheet';
                    nodeLink.setAttribute('data-theme', name);
                    nodeLink.href = manifest[`css/${name}.css`];

                    document.head.append(nodeLink);
                }
            })();
        }
    },
}));

export const useTheme = (props: IThemeProps = {}) => {
    const {
        getNameThemeAfterChangeTheme = false,
    } = props;

    const { onChangeTheme, nameTheme } = useSingleStore(themeStore, (state) => ({
        onChangeTheme: state.onChange,
        nameTheme: getNameThemeAfterChangeTheme && state.nameTheme,
    }));

    return {
        onChangeTheme,
        nameTheme,
        getStateTheme: themeStore.getState,
    };
};
