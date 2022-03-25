import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HRDashBoardMain from "./screen/HRDashboard/HRDashBoardMain";
import HRLoginPageMain from "./screen/HRLoginScreen/HRLoginPageMain";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<HRDashBoardMain />} />
                <Route exact path="/" element={<HRLoginPageMain />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
