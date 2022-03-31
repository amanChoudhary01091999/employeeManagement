import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundVerification from "./screen/BackGroundVerification/BackGroundVerification";
import CodeOfConduct from "./screen/CodeOfConductForm/CodeOfConduct";
import CovidForm from "./screen/COVIDForm/CovidFrom";
import EPFFormMain from "./screen/EPFForm/EPFFormMain";
import GFFormMain from "./screen/FormGratuity/GFFormMain";
import HRDashBoardMain from "./screen/HRDashboard/HRDashBoardMain";
import HRLoginPageMain from "./screen/HRLoginScreen/HRLoginPageMain";
import RCAFForm from "./screen/RefCheckAuthForm/RCAFForm";
import UserLogin from "./screen/UserAuthentication/UserLogin";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<HRDashBoardMain />} />
                <Route exact path="/" element={<HRLoginPageMain />} />
                <Route exact path="/user-login" element={<UserLogin />} />
                <Route
                    exact
                    path="/bgv-form"
                    element={<BackgroundVerification />}
                />
                <Route
                    exact
                    path="/codeOfConduct-form"
                    element={<CodeOfConduct />}
                />
                <Route exact path="/covid-form" element={<CovidForm />} />
                <Route exact path="/gratuity-form" element={<GFFormMain />} />
                <Route exact path="/refcheck-form" element={<RCAFForm />} />
                <Route exact path="/epf-form" element={<EPFFormMain />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
