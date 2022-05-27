import React from "react";
import DatePicker from "../../InputFiles/DatePicker";
import TextAreaInput from "../../InputFiles/TextAreaInput";
import Validation from "../../validation/Validations";
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { validateDateTime } from "@mui/lab/internal/pickers/date-time-utils";

function RCAFPart2(props) {
    const number = props.number;
    const formState = props.formState;
    const { loadingRCAF, errorRCAF, userInfoRCAF } = useSelector(
        (state) => state.RCAFGetReducer
    );
    let userInfo = null;
    if (number === "1") userInfo = userInfoRCAF?.first_degree;
    else if (number === "2") userInfo = userInfoRCAF?.second_degree;
    else if (number === "3") userInfo = userInfoRCAF?.third_degree;
    const validationName = Validation().validationName;
    const validationDegree = Validation().validationDegree;

    const {
        formState: { errors },
    } = props.formState;

    return (
        <div>
            <hr className="my-5"></hr>
            <Box
                sx={{
                    bgcolor: "#cfe8fc",
                    height: "10vh",
                    fontSize: "5vh",
                    fontFamily: "Muller",
                    textAlign: "center",
                }}
            >
                EDUCATION DEGREE ({number})
            </Box>

            <table className="table table-bordered align-middle mt-4">
                <tbody>
                    <tr>
                        {/* <td className="text-center" scope="row">1</td> */}
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Degree Earned ({number}):
                                    </p>
                                </div>
                                <div className="col-9">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Title"}
                                        name={`degree_earned_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo && userInfo.degree_earned
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Institute Name ({number}):
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Name of the Institute"}
                                        name={`institute_name_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo && userInfo.institute_name
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        University Name ({number}):
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"University Name"}
                                        name={`university_name_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo && userInfo.university_name
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Institute Address & Contact Number (
                                        {number}):
                                    </p>
                                </div>
                                <div className="col-9">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Institute Address"}
                                        name={`institute_address_${number}`}
                                        validation={validationDegree}
                                        defaultValue={
                                            userInfo &&
                                            userInfo.institute_details
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        University Address ({number}):
                                    </p>
                                </div>
                                <div className="col-9">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"University Address"}
                                        name={`university_address_${number}`}
                                        validation={validationDegree}
                                        defaultValue={
                                            userInfo &&
                                            userInfo.university_details
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        From (month / year) ({number}):
                                    </p>
                                </div>
                                <div className="col">
                                    <DatePicker
                                        formState={props.formState}
                                        label={null}
                                        type={"date"}
                                        name={`degree_period_to_${number}`}
                                        validation={validationDegree}
                                        defaultValue={
                                            userInfo && userInfo.to_date
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        To (month / year) ({number}):
                                    </p>
                                </div>
                                <div className="col">
                                    <DatePicker
                                        formState={props.formState}
                                        label={null}
                                        type={"date"}
                                        name={`degree_period_from_${number}`}
                                        validation={validationDegree}
                                        defaultValue={
                                            userInfo && userInfo.from_date
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Graduated ({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <InputRadioGroup
                                        formState={props.formState}
                                        name={`graduated_${number}`}
                                        labelGroup={""}
                                        label={["Yes", "No", "Pursuing"]}
                                        defaultValue={
                                            userInfo && userInfo.graduated
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Programm ({number}) :{" "}
                                    </p>
                                </div>
                                <div className="col">
                                    <InputRadioGroup
                                        formState={props.formState}
                                        name={`programm_${number}`}
                                        labelGroup={""}
                                        label={["Full Time", "Part Time"]}
                                        defaultValue={
                                            userInfo && userInfo.program
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Type Of Degree ({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Type of degree"}
                                        name={`type_of_degree_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo && userInfo.degree_type
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Graduation date (month / year) ({number}
                                        ) :
                                    </p>
                                </div>
                                <div className="col">
                                    <DatePicker
                                        formState={props.formState}
                                        label={null}
                                        type={"date"}
                                        name={`graduation_date_${number}`}
                                        validation={validationDegree}
                                        defaultValue={
                                            userInfo && userInfo.graduation_date
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Major Subject ({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Major subject"}
                                        name={`major_subject_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo && userInfo.major_subject
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Roll No ({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Roll Number"}
                                        name={`roll_no_${number}`}
                                        validation={validationDegree}
                                        defaultValue={
                                            userInfo && userInfo.roll_no
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Enrolment No ({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Enrollment Number"}
                                        name={`enrolment_no_${number}`}
                                        validation={validationDegree}
                                        defaultValue={
                                            userInfo && userInfo.enrollment_no
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Hall Ticket No ({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Hall ticket number"}
                                        name={`hall_ticket_no_${number}`}
                                        validation={validationDegree}
                                        defaultValue={
                                            userInfo && userInfo.hall_ticket_no
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Registration No({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"registration Number"}
                                        name={`registration_no_${number}`}
                                        validation={validationDegree}
                                        defaultValue={
                                            userInfo && userInfo.registration_no
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RCAFPart2;
