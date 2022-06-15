import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import DatePicker from "../../InputFiles/DatePicker";
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import TextAreaInput from "../../InputFiles/TextAreaInput";
import Validation from "../../validation/Validations";

function RAFCPart3(props) {
    const validationAddress = Validation().validationAddress;
    const validationPhone = Validation().validationPhone;
    const validation = Validation().validationDegree;
    const validationName = Validation().validationName;
    const validationNumber = Validation().validationNumber;
    const number = props.number;
    const stateOfEmployer = props.stateOfEmployer;
    const { loadingRCAF, errorRCAF, userInfoRCAF } = useSelector(
        (state) => state.RCAFGetReducer
    );
    let userInfo = null;
    if (number === "0") userInfo = userInfoRCAF?.first_company;
    else if (number === "1") userInfo = userInfoRCAF?.second_comapny;
    else if (number === "2") userInfo = userInfoRCAF?.third_company;

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
                Details of {stateOfEmployer} Employer{" "}
                {stateOfEmployer === "current" ? "" : number} :-{" "}
            </Box>

            <table className="table table-bordered align-middle mt-4">
                <tbody>
                    <tr>
                        <td className="col-6">
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
                                        Company Name :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Company Name"}
                                        name={`company_name_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo && userInfo.company_name
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td className="col-6">
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
                                        Position Held :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Position Held"}
                                        name={`position_held_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo && userInfo.position_held
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
                                        Department :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Department"}
                                        name={`department_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo && userInfo.department
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
                                        Telephone :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Telephone"}
                                        name={`telephone_${number}`}
                                        validation={validationPhone}
                                        defaultValue={
                                            userInfo && userInfo.telephone
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
                                        Employment Period From :
                                    </p>
                                </div>
                                <div className="col">
                                    <DatePicker
                                        formState={props.formState}
                                        label={null}
                                        type={"date"}
                                        name={`employment_period_from_${number}`}
                                        validation={validationAddress}
                                        defaultValue={
                                            userInfo && userInfo.from_date
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
                                        Employment Period To :
                                    </p>
                                </div>
                                <div className="col">
                                    <DatePicker
                                        formState={props.formState}
                                        label={null}
                                        type={"date"}
                                        name={`employment_period_to_${number}`}
                                        validation={validationAddress}
                                        defaultValue={
                                            userInfo && userInfo.to_date
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
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
                                        Address : (main office & branch where
                                        worked) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Address"}
                                        name={`address_office_${number}`}
                                        validation={validationAddress}
                                        defaultValue={
                                            userInfo && userInfo.address
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
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
                                        Agency Details (if temporary or
                                        contractual) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Agency Details"}
                                        name={`agency_details_${number}`}
                                        validation={validationAddress}
                                        defaultValue={
                                            userInfo && userInfo.agency_details
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
                                        Whether employment is of permanent or
                                        temporary nature :
                                    </p>
                                </div>
                                <div className="col">
                                    <InputRadioGroup
                                        formState={props.formState}
                                        label={["Permanent", "Temporary"]}
                                        labelGroup={""}
                                        name={`employer_nature_${number}`}
                                        defaultValue={
                                            userInfo && userInfo.employer_nature
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
                                        Employee Code ({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Employee Code"}
                                        name={`employee_code_${number}`}
                                        validation={validationAddress}
                                        defaultValue={
                                            userInfo && userInfo.employee_code
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div
                                    style={{
                                        fontFamily: "Muller",
                                        fontSize: "20px",
                                        textAlign: "center",
                                        marginRight: "10px",
                                    }}
                                >
                                    Reporting details: (Last Supervisor) :
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
                                        Name :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Name"}
                                        name={`RD_name_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo &&
                                            userInfo.reporting_details
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
                                        Position :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Position"}
                                        name={`RD_position_${number}`}
                                        validation={validationName}
                                        defaultValue={
                                            userInfo && userInfo.position
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
                                        Contact No. :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Contact Number"}
                                        name={`RD_contactNo_${number}`}
                                        validation={validationPhone}
                                        defaultValue={
                                            userInfo && userInfo.contact_no
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
                                        Remunerations / Salary CTC / Gross per
                                        month] :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Remunarations"}
                                        name={`remunerations_${number}`}
                                        validation={validationNumber}
                                        defaultValue={
                                            userInfo && userInfo.remunerations
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
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
                                        {stateOfEmployer === "current"
                                            ? "When Can Conduct Discussion with Current Employer  :"
                                            : "Reason(s) for Leaving :"}
                                    </p>
                                </div>
                                <div className="col">
                                    {stateOfEmployer === "current" ? (
                                        <div>
                                            <InputRadioGroup
                                                formState={props.formState}
                                                label={[
                                                    "Immediate",
                                                    "After Joining",
                                                    "After Quarter",
                                                ]}
                                                name={"conduct_discussion"}
                                                defaultValue={
                                                    userInfo &&
                                                    userInfo.reason_for_leaving
                                                }
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <TextAreaInput
                                                formState={props.formState}
                                                label={"raeson for leaving"}
                                                name={`leaving_reason_${number}`}
                                                validation={validationAddress}
                                                defaultValue={
                                                    userInfo &&
                                                    userInfo.reason_for_leaving
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default RAFCPart3;
