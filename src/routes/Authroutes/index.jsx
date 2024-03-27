import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Authroutes = () => {
  return (
    !localStorage.getItem("uid") ? <Outlet/> : <Navigate to = {"/dashboard"}/>
  )
}

export default Authroutes