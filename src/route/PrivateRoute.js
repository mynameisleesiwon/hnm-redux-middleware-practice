import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);

  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
