import {RouteProps} from "react-router-dom";
import {AboutPage} from "pages/About";
import {MainPage} from "pages/Main";
import {RoutesPath} from "shared/config/routes/routes";

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
