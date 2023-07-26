import { Suspense } from 'react';
import Router from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useIntegrateRouterWithStore } from 'shared/config/store/hooks/useIntegrateRouterWithStore';

const App = () => {
    useIntegrateRouterWithStore();

    return (
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] min-h-[100vh]">
            <Suspense fallback="">
                <Navbar className="col-span-full" />
                <Sidebar />
                <Router />
            </Suspense>
        </div>
    );
};

export default App;
