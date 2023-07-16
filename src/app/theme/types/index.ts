export enum EnumVariantTheme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ITheme {
    nameTheme: EnumVariantTheme,
    onChange: (name: EnumVariantTheme) => void
    init: () => void
}

export interface IThemeProps {
    getNameThemeAfterChangeTheme?: boolean
}
