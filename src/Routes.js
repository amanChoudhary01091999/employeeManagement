import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./util/PrivateRoutes";
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
                <Route
                    path="/"
                    element={
                        <PrivateRoutes>
                            <HRDashBoardMain />
                        </PrivateRoutes>
                    }
                />
                <Route path="/login" element={<HRLoginPageMain />} />
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
                <Route path="/covid-form" element={<CovidForm />} />
                <Route path="/gratuity-form" element={<GFFormMain />} />
                <Route path="/refcheck-form" element={<RCAFForm />} />
                <Route path="/epf-form" element={<EPFFormMain />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
