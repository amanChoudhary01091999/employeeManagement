import React from "react";
import { Navigate, Route } from "react-router-dom";

function getLocalValue() {
    return localStorage.getItem("authToken");
}
function getUserAccessToken() {
    return localStorage.getItem("accessToken");
}
function getUserId() {
    return localStorage.getItem("id");
}

export const PrivateRoutes = ({ children }) => {
    if (getLocalValue() === null) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export const PrivateFormRoutes = ({ children }) => {
    if (getUserAccessToken() === null) {
        return <Navigate to="/user-login" replace />;
    }
    return children;
};

export const PrivateUserLoginRoutes = ({ children }) => {
    if (getUserAccessToken() !== null) {
        return <Navigate to="/bgv-form" replace />;
    }
    return children;
};
