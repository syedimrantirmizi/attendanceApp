import React from "react";
import { Navigate, Outlet, json } from "react-router-dom";
import Portal from "../../pages/Portal";
import Dashboard from "../../pages/Dashboard";

const Adminprotectedroutes = () => {
  return localStorage.getItem("uid") ? (
    JSON.parse(localStorage.getItem("data")).type == "admin" ? (
      <Outlet />
    ) : (
      <Navigate to={"/portal"} />
    )
  ) : (
    <Navigate to={"/"} />
  );
};
const Studentprotectedroute = () => {
  return localStorage.getItem("uid") ? (
    JSON.parse(localStorage.getItem("data")).type == "std" ? (
      <Outlet />
    ) : (
      <Navigate to={"/dashboard"} />
    )
  ) : (
    <Navigate to={"/"} />
  );
};

export default Adminprotectedroutes;

export { Studentprotectedroute };
