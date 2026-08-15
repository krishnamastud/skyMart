import React from 'react'
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if(!user){
        return <Navigate to="/" />
    }

  return <Outlet />
}

export default MainProtected