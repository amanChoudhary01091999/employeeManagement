import React from "react";
import { Navigate, Route } from "react-router-dom";

function getLocalValue() {
    return localStorage.getItem("authToken");
}
const PrivateRoutes = ({ children }) => {
    if (getLocalValue() === null) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default PrivateRoutes;
