import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from 'shared/ui/Loading';
import { routeConfig } from '../lib/config';

const Router = () => (
    <Routes>
        {
            routeConfig.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<Loading on />}>
                            <div className="w-full p-[2rem]">{element}</div>
                        </Suspense>
                    )}
                />
            ))
        }
    </Routes>

);

export default Router;
