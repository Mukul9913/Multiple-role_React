import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';
const Root = () => {
    const { auth } = useAuth();    
    if (auth) { return <Navigate to="/"/> }
    return (<Outlet />)
}

export default Root