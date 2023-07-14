import React from 'react';
import { Link } from "react-router-dom";
import {useTheme, EnumVariantTheme} from "./theme";
import Router from "app/providers/router";

const App = () => {
    const { onChangeTheme } = useTheme()

    return (
        <div className="app h-[90px] d-flex" data-theme="light">
           <div  onClick={() => onChangeTheme(EnumVariantTheme.DARK)}>dark</div>
           <div onClick={() => onChangeTheme(EnumVariantTheme.LIGHT)}>light</div>
           <Link to="/about">about</Link>
           <Link to="/main">main</Link>
           <Router />
        </div>
    );
};

export default App;
