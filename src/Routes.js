import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundVerification from "./screen/BackGroundVerification/BackGroundVerification";
import CodeOfConduct from "./screen/CodeOfConductForm/CodeOfConduct";
import CovidForm from "./screen/COVIDForm/CovidFrom";
import EPFFormMain from "./screen/EPFForm/EPFFormMain";
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

                <Route path="/user-login" element={<UserLogin />} />
                <Route path="/bgv-form" element={<BackgroundVerification />} />
                <Route path="/codeOfConduct-form" element={<CodeOfConduct />} />
                <Route path="/covid-form" element={<CovidForm />} />
                <Route path="/gratuity-form" element={<GFFormMain />} />
                <Route path="/epf-form" element={<EPFFormMain />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
