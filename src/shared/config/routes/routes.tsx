import { RouteProps } from 'react-router-dom'
import {AboutPage} from "pages/About";
import {MainPage} from "pages/Main";

export enum EnumRoutesName {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutesPath: Record<EnumRoutesName, string> = {
    [EnumRoutesName.MAIN] : '/',
    [EnumRoutesName.ABOUT] : '/about',
}


export const routeConfig: Array<RouteProps> = [
    {
        path: RoutesPath.main,
        element: <AboutPage />
    },
    {
        path: RoutesPath.about,
        element: <MainPage />
    }
]
