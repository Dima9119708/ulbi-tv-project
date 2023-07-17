import { lazy } from 'react';

export const MainPage = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve('');
    }, 1500);
}).then(() => import('./ui/Main')));
