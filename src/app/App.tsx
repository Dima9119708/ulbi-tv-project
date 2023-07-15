import React from 'react';
import { useTheme } from "./theme";
import Router from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {

    return (
        <div>
           <Navbar />
           <Router />
        </div>
    );
};

export default App;
