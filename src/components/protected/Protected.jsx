import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router';
import { isTokenValid } from '../services/auth/auth.helpers';
import { AuthenticationContext } from '../services/auth.context';

const Protected = () => {
    const { token } = useContext(AuthenticationContext)
    if (!isTokenValid(token)) {
        return <Navigate to="/login" replace />;
    } else {
        return <Outlet />
    }
}

export default Protected