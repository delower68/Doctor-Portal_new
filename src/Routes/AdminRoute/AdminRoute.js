import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import UseAdmin from '../../hooks/UseAdmin';
import Loading from '../../Pages/Shared/loading/Loading';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin(user?.email)
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loading/>
    }

    if (user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;