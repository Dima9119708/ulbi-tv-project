import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { RoutesPath } from 'shared/config/routes/routes';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/Profile';

type TRouteProps = {
    isProtected: boolean
} & RouteProps

export const routeConfig: Array<TRouteProps> = [
    {
        path: RoutesPath.main,
        element: <MainPage />,
        isProtected: false,
    },
    {
        path: RoutesPath.about,
        element: <AboutPage />,
        isProtected: false,
    },
    {
        path: RoutesPath.profile,
        element: <ProfilePage />,
        isProtected: true,
    },
    {
        path: RoutesPath.not_found,
        element: <NotFound />,
        isProtected: false,
    },
];
