import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HRDashBoardMain from "./screen/HRDashboard/HRDashBoardMain";
import HRLoginPageMain from "./screen/HRLoginScreen/HRLoginPageMain";
import UserLogin from "./screen/UserAuthentication/UserLogin";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<HRDashBoardMain />} />
                <Route exact path="/" element={<HRLoginPageMain />} />
                <Route exact path="/user-login" element={<UserLogin/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
