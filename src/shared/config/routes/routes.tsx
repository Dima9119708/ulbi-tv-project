export enum EnumRoutesName {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutesPath: Record<EnumRoutesName, string> = {
    [EnumRoutesName.MAIN] : '/',
    [EnumRoutesName.ABOUT] : '/about',
}
