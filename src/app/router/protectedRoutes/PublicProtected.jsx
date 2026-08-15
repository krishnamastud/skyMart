import React from 'react'
import { Navigate, Outlet } from 'react-router';

const PublicProtected = () => {

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if(user){
        return <Navigate to="/main" />
    }

  return <Outlet />
}

export default PublicProtected
