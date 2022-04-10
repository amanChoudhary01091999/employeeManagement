import { Box } from "@mui/material";
import React from "react";
import DatePicker from '../../InputFiles/DatePicker'
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'

function RAFCPart3(props) {
    const validationAddress = Validation().validationAddress;
    const validationPhone = Validation().validationPhone;
    const number = props.number;
    const stateOfEmployer = props.stateOfEmployer;
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
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>Company Name :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Company Name"}
                                        name={`company_name_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                        <td className="col-6">
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>Position Held :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={'Position Held'}
                                        name={`position_held_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>Department :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Department"}
                                        name={`department_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>Telephone :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Telephone"}
                                        name={`telephone_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>
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
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>
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
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>
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
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>
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
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>
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
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>
                                        Employee Code ({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Employee Code"}
                                        name={`employee_code_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"center",marginRight:"10px"}}>
                                    Reporting details: (Last Supervisor) :
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>Name :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={'Name'}
                                        name={`RD_name_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>Position :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Position"}
                                        name={`RD_position_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>Contact No. :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Contact Number"}
                                        name={`RD_contactNo_${number}`}
                                        validation={validationPhone}
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>
                                        Remunerations / Salary CTC / Gross per
                                        month] :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={"Remunarations"}
                                        name={`remunerations_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginRight:"10px"}}>
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
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <TextAreaInput
                                                formState={props.formState}
                                                label={"raeson for leaving"}
                                                name={`leaving_reason_${number}`}
                                                validation={validationAddress}
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
