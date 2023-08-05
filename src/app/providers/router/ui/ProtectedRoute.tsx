import { userStore } from 'entity/User';
import { getIsAuth } from 'entity/User/model/store';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutesPath } from 'shared/config/routes/routes';
import { useSingleStore } from 'shared/config/store/store';

interface IProtectedRoute {
    isProtected: boolean,
    children: ReactNode,
}

const ProtectedRoute = ({ isProtected, children }: IProtectedRoute) => {
    const isAuth = useSingleStore(userStore, getIsAuth);

    if (isProtected && !isAuth) {
        return <Navigate to={RoutesPath.main} replace />;
    }

    return children;
};

export default ProtectedRoute;
