import React from 'react';
import Router from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {

    return (
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] min-h-[100vh]">
           <Navbar className="col-span-full" />
           <Sidebar />
           <Router />
        </div>
    );
};

export default App;
