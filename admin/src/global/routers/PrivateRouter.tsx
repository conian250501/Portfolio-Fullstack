import React from "react";
import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const PrivateRouter: React.FC<Props> = ({ children }) => {
  const isAuthenticated = Boolean(Cookies.get("access_token"));

  return <>{isAuthenticated ? children : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
