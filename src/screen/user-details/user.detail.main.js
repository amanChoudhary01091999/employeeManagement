import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import BackgroundVerification from "../BackGroundVerification/BackGroundVerification";
import CodeOfConduct from "../CodeOfConductForm/CodeOfConduct";
import CovidForm from "../COVIDForm/CovidFrom";
import EPFFormMain from "../EPFForm/EPFFormMain";
import GFFormMain from "../FormGratuity/GFFormMain";
import RCAFForm from "../RefCheckAuthForm/RCAFForm";
import UserDetailBGV from "./user.detail.bgv";

function UserDetailMain() {
    const { id } = useParams();
    console.log(id);
    // const { state } = useLocation();
    // console.log(state);

    // const { id } = state === null ? {} : state;
    // console.log(id);

    return (
        <div style={{ margin: 0 }}>
            {/* <UserDetailBGV /> */}
            {id === undefined ? (
                <p>Error</p>
            ) : (
                <div>
                    <BackgroundVerification idFromDashBoard={id} />
                    <CovidForm idFromDashBoard={id} />
                    <GFFormMain idFromDashBoard={id} />
                    <EPFFormMain idFromDashBoard={id} />
                    <RCAFForm idFromDashBoard={id} />
                    <CodeOfConduct idFromDashBoard={id} />
                </div>
            )}
        </div>
    );
}

export default UserDetailMain;
