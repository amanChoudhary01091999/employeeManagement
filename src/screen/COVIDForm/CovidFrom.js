import React from "react";
import { useForm } from "react-hook-form";

import DatePicker from "../../InputFiles/DatePicker";
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import TextAreaInput from "../../InputFiles/TextAreaInput";
import Validation from "../../validation/Validations";
import { useSelector, useDispatch } from "react-redux";

import "../BackGroundVerification/index.css";
import { COVIDGetRequest } from "../../actions/form.get.action";
import { COVIDPostRequest } from "../../actions/form.post.action";
import { LoadingButton } from "@mui/lab";
import CovidFormAppBar from "./CovidFormAppBar";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FilePicker from "../../InputFiles/FileInput";
import { useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import { Button, CircularProgress, Stack } from "@mui/material";
import CovidComponent from "./CovidComponent";

const CovidForm = ({ idFromDashBoard }) => {
    const idFromLocalStorage = localStorage.getItem("id");
    const id =
        idFromDashBoard === undefined ? idFromLocalStorage : idFromDashBoard;
    const navigate = useNavigate();
    const formState = useForm();
    const { loadingCovid, userInfoCovid } = useSelector(
        (state) => state.COVIDGetReducer
    );

    const { handleSubmit } = formState;

    const CovidState = useSelector((state) => state.COVIDReducer);
    const { loading, error, userInfo } = CovidState;
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const covidApiObj = {
            user_id: id,
            phone: data.phoneNumber,
            date_of_birth: data.dateOfBirth,
            fever: data.fever == "Yes" ? true : false,
            name: data.firstName,
            //signature: data.confirmSignUser[0].name,
            date: data.confirmDateUser,
            employee_name: data.confirmNameUser,
            employee_id: data.empId,
            dry_cough: data.dryCough == "Yes" ? true : false,
            sore_throat: data.soreThroat == "Yes" ? true : false,
            breathing_problem: data.breathingProblem == "Yes" ? true : false,
            covid_positive_person: data.conCovid == "Yes" ? true : false,
            covid_positive_family_member:
                data.conCovidFam == "Yes" ? true : false,
            first_dose: data.firstDose == undefined ? "" : data.firstDose,
            second_dose: data.secondDose == undefined ? "" : data.secondDose,
            vaccine_name: data.vaccineName == undefined ? "" : data.vaccineName,
            mode_of_travel: data.travelMode,
            covid_contact_date:
                data.covidConDate == undefined ? "" : data.covidConDate,
            covid_vaccinated: data.vaccinated == "Yes" ? true : false,
            chronic_respiratory:
                data.chronic_respiratory == "Yes" ? true : false,
            chronic_heart_disease:
                data.chronic_heart_disease == "Yes" ? true : false,
            other_medical_conditions:
                data.other_medical_conditions == "Yes" ? true : false,
            diabetes: data.diabetes == "Yes" ? true : false,
            out_of_containment_zone:
                data.out_of_containment_zone == "Yes" ? true : false,
        };
        const formData = new FormData();
        formData.append("file", data.confirmSignUser[0]);
        formData.append("data", JSON.stringify(covidApiObj));
        dispatch(COVIDPostRequest(formData, navigate));
    };
    useEffect(() => {
        dispatch(COVIDGetRequest(id));
    }, []);

    return (
        <div style={{ minWidth: "1000px" }}>
            {loadingCovid && <Spinner />}
            {userInfoCovid && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CovidFormAppBar />
                    <CovidComponent
                        formState={formState}
                        idFromDashBoard={idFromDashBoard}
                    />
                </form>
            )}
        </div>
    );
};

// function CovidForm() {
//     const dispatch = useDispatch();
//     const { loadingCovid, userInfoCovid } = useSelector(
//         (state) => state.COVIDGetReducer
//     );
//     useEffect(() => {
//         dispatch(COVIDGetRequest(20));
//     }, []);
//     console.log(userInfoCovid);
//     return <div></div>;
// }
export default CovidForm;
