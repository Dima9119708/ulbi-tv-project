import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from 'shared/ui/Loading';
import { routeConfig } from '../lib/config';
import ProtectedRoute from './ProtectedRoute';

const Router = () => (
    <Routes>
        {
            routeConfig.map(({ path, element, isProtected }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <ProtectedRoute isProtected={isProtected}>
                            <Suspense fallback={<Loading on />}>
                                <div className="w-full p-[2rem]">{element}</div>
                            </Suspense>
                        </ProtectedRoute>
                    )}
                />
            ))
        }
    </Routes>

);

export default Router;
