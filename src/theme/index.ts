import {createStore, useSingleStore} from "../shared/config/store";
import {useLayoutEffect} from "react";
import {EnumVariantTheme, ITheme, IThemeProps} from "./types";

const themeStore = createStore<ITheme>((set, get) => ({
    nameTheme: EnumVariantTheme.LIGHT,
    init: () => {
        const savedThemeName = localStorage.getItem('themeName')

        get().onChange(
            (savedThemeName as EnumVariantTheme) || EnumVariantTheme.LIGHT
        )
    },
    onChange: (name: EnumVariantTheme) => {
        localStorage.setItem('themeName', name)
        document.body.setAttribute('data-theme', name)

        set((state) => {
            state.nameTheme = name
        })
    }
}))

export const useTheme = (props: IThemeProps = {}) => {
    const {
        getNameThemeAfterChangeTheme = false
    } = props


    const { onChangeTheme, init, nameTheme } = useSingleStore(themeStore, (state) => {
        return ({
            init: state.init,
            onChangeTheme: state.onChange,
            nameTheme: getNameThemeAfterChangeTheme && state.nameTheme
        })
    })

    useLayoutEffect(() => {
        init()
    }, [])


    return {
        onChangeTheme,
        nameTheme,
    }
}
