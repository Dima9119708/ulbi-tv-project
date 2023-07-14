import React, {lazy, Suspense, useEffect} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./theme";
import {EnumVariantTheme} from "./theme/types";
import {cn} from "./helpers/classNames";

const MainPage = lazy(() => import('./pages/Main') )
const AboutPage = lazy(() => import('./pages/About'))


const App = () => {
    const { onChangeTheme } = useTheme()

    return (
        <div className="app h-[90px] d-flex" data-theme="light">
            <div  onClick={() => onChangeTheme(EnumVariantTheme.DARK)}>dark</div>
            <div onClick={() => onChangeTheme(EnumVariantTheme.LIGHT)}>light</div>
            <Link to="/about">about</Link>
            <Link to="/main">main</Link>
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path="/" element={<>ascsacas</>} />
                    <Route path="/about" element={<MainPage />} />
                    <Route path="/main" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>

    );
};

export default App;
