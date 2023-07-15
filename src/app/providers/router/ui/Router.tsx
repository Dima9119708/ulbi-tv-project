import React, { Suspense } from 'react';
import { Route ,Routes } from "react-router-dom";
import {routeConfig} from "shared/config/routes/routes";

const Router = () => {

    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                {
                    routeConfig.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<div className="w-full p-[2rem]">{element}</div>}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default Router;
