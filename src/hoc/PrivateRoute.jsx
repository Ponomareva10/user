import React from "react";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAllowed, children }) => {

    if (!isAllowed) return <Navigate to="/laptops" /> 
    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoute;