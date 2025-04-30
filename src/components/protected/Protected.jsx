import React from 'react'
import { Outlet, Navigate } from 'react-router';

const Protected = ({isLogged}) => {
    if (!isLogged) {
        return <Navigate to="/login" replace />;
    } else{
        return <Outlet/>
    }
}

export default Protected