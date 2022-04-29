import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
    PrivateRoutes,
    PrivateFormRoutes,
    PrivateUserLoginRoutes,
} from "./util/PrivateRoutes";
import BackgroundVerification from "./screen/BackGroundVerification/BackGroundVerification";
import CodeOfConduct from "./screen/CodeOfConductForm/CodeOfConduct";
import CovidForm from "./screen/COVIDForm/CovidFrom";
import EPFFormMain from "./screen/EPFForm/EPFFormMain";
import GFFormMain from "./screen/FormGratuity/GFFormMain";
import HRDashBoardMain from "./screen/HRDashboard/HRDashBoardMain";
import HRLoginPageMain from "./screen/HRLoginScreen/HRLoginPageMain";
import RCAFForm from "./screen/RefCheckAuthForm/RCAFForm";
import UserLogin from "./screen/UserAuthentication/UserLogin";
import Form from "./screen/Form/Form";
import UserDetailMain from "./screen/user-details/user.detail.main";

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
                <Route
                    path="/user-detail"
                    element={
                        <PrivateRoutes>
                            <UserDetailMain />
                        </PrivateRoutes>
                    }
                />
                <Route path="/login" element={<HRLoginPageMain />} />
                <Route
                    exact
                    path="/user-login"
                    element={
                        <PrivateUserLoginRoutes>
                            <UserLogin />
                        </PrivateUserLoginRoutes>
                    }
                />
                <Route
                    exact
                    path="/bgv-form"
                    element={
                        <PrivateFormRoutes>
                            <BackgroundVerification />
                        </PrivateFormRoutes>
                    }
                />
                <Route
                    exact
                    path="/codeOfConduct-form"
                    element={
                        <PrivateFormRoutes>
                            <CodeOfConduct />
                        </PrivateFormRoutes>
                    }
                />
                <Route
                    path="/covid-form"
                    element={
                        <PrivateFormRoutes>
                            <CovidForm />
                        </PrivateFormRoutes>
                    }
                />
                <Route
                    path="/gratuity-form"
                    element={
                        <PrivateFormRoutes>
                            <GFFormMain />
                        </PrivateFormRoutes>
                    }
                />
                <Route
                    path="/refcheck-form"
                    element={
                        <PrivateFormRoutes>
                            <RCAFForm />
                        </PrivateFormRoutes>
                    }
                />
                <Route
                    path="/epf-form"
                    element={
                        <PrivateFormRoutes>
                            <EPFFormMain />
                        </PrivateFormRoutes>
                    }
                />

                <Route path="/form" element={<Form />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
