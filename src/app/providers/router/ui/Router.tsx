import React, { Suspense } from 'react';
import { Route ,Routes } from "react-router-dom";
import {routeConfig} from "shared/config/routes/routes";

const Router = () => {

    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                {
                    routeConfig.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default Router;
