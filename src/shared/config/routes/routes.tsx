export enum EnumRoutesName {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutesPath: Record<EnumRoutesName, string> = {
    [EnumRoutesName.MAIN]: '/',
    [EnumRoutesName.ABOUT]: '/about',
    [EnumRoutesName.NOT_FOUND]: '*',
};
