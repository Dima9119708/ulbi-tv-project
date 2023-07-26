export enum EnumRoutesName {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const RoutesPath: Record<EnumRoutesName, string> = {
    [EnumRoutesName.MAIN]: '/',
    [EnumRoutesName.ABOUT]: '/about',
    [EnumRoutesName.PROFILE]: '/profile',
    [EnumRoutesName.NOT_FOUND]: '*',
};
