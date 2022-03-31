import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundVerification from "./screen/BackGroundVerification/BackGroundVerification";
import CodeOfConduct from "./screen/CodeOfConductForm/CodeOfConduct";
import CovidForm from "./screen/COVIDForm/CovidFrom";
import GFFormMain from "./screen/FormGratuity/GFFormMain";
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
                <Route exact path="/bgv-form" element={<BackgroundVerification/>} />
                <Route exact path="/codeOfConduct-form" element={<CodeOfConduct/>} />
                <Route exact path="/covid-form" element={<CovidForm/>} />
                <Route exact path="/gratuity-form" element={<GFFormMain/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
