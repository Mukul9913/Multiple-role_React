import React from 'react'
import useAuth from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import Unauthorized from '../components/Unauthorized';

const ProtectedRoute = ({allowedRoles}) => {
    const auth=useAuth();
    const useHasRole=allowedRoles?.find((role)=>role==auth?.role) ? true : false;
     if(!auth){return <Navigate to="/login"/>}
     if(useHasRole){return <Outlet/>}
     else{return <Unauthorized/>}
}

export default ProtectedRoute