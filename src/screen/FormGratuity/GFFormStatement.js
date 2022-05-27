import React from "react";
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import TextAreaInput from "../../InputFiles/TextAreaInput";
import Validation from "../../validation/Validations";
import DatePicker from "../../InputFiles/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import FilePicker from "../../InputFiles/FileInput";

function GFFormStatement(props) {
    const GFGetState = useSelector((state) => state.GFGetReducer);
    const { loadingGF, userInfoGF, errorGF } = GFGetState;

    const validation = Validation().validationDegree;
    const validationName = Validation().validationName;
    const validationNumber = Validation().validationNumber;

    return (
        <div>
            <h5 style={{ fontFamily: "Muller", textAlign: "center" }}>
                Statement
            </h5>
            <ol className="list-group">
                <li>
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p
                                style={{
                                    fontFamily: "Muller",
                                    textAlign: "center",
                                }}
                            >
                                Name of employee in full:
                            </p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={"employee_full_name"}
                                label={"Full Name"}
                                validation={validationName}
                                defaultValue={
                                    userInfoGF && userInfoGF.employee_full_name
                                }
                                placeholder={""}
                            />
                        </div>
                    </div>
                    <hr />
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p
                                style={{
                                    fontFamily: "Muller",
                                    textAlign: "center",
                                }}
                            >
                                Sex:
                            </p>
                        </div>
                        <div className="col-9">
                            <InputRadioGroup
                                formState={props.formState}
                                name={"gender"}
                                labelGroup={null}
                                label={["Male", "Female", "Other"]}
                                defaultValue={userInfoGF && userInfoGF.gender}
                            />
                        </div>
                    </div>
                    <hr />
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p
                                style={{
                                    fontFamily: "Muller",
                                    textAlign: "center",
                                }}
                            >
                                Religion:
                            </p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={"religion"}
                                label={"Religion"}
                                validation={validationName}
                                defaultValue={userInfoGF && userInfoGF.religion}
                                placeholder={""}
                            />
                        </div>
                    </div>
                    <hr />
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p
                                style={{
                                    fontFamily: "Muller",
                                    textAlign: "center",
                                }}
                            >
                                Marital Status:
                            </p>
                        </div>
                        <div className="col-9">
                            <InputRadioGroup
                                formState={props.formState}
                                name={"marital_status"}
                                labelGroup={null}
                                defaultValue={
                                    userInfoGF && userInfoGF.marital_status
                                }
                                label={[
                                    "Married",
                                    "Unmarried",
                                    "Widow",
                                    "Widower",
                                    "Divorcee",
                                ]}
                            />
                        </div>
                    </div>
                    <hr />
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p
                                style={{
                                    fontFamily: "Muller",
                                    textAlign: "center",
                                }}
                            >
                                Department/Branch/Section where employed:
                            </p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={"department"}
                                label={"Department"}
                                defaultValue={
                                    userInfoGF && userInfoGF.department
                                }
                                validation={validationName}
                                placeholder={""}
                            />
                        </div>
                    </div>
                    <hr />
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p
                                style={{
                                    fontFamily: "Muller",
                                    textAlign: "center",
                                }}
                            >
                                Post held with Ticket No. or Serial No:
                            </p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={"ticket_no"}
                                label={"Ticket Number"}
                                validation={validationNumber}
                                defaultValue={
                                    userInfoGF && userInfoGF.ticket_no
                                }
                                placeholder={""}
                            />
                        </div>
                    </div>
                    <hr />
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p
                                style={{
                                    fontFamily: "Muller",
                                    textAlign: "center",
                                }}
                            >
                                Date of appointment:
                            </p>
                        </div>
                        <div className="col-9">
                            <DatePicker
                                formState={props.formState}
                                name={"date_of_appointment"}
                                label={null}
                                defaultValue={
                                    userInfoGF && userInfoGF.date_of_appointment
                                }
                                type={"date"}
                                validation={validation}
                                placeholder={""}
                            />
                        </div>
                    </div>
                    <hr />
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p
                                style={{
                                    fontFamily: "Muller",
                                    textAlign: "center",
                                }}
                            >
                                Permanent address:
                            </p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={"permanent_address"}
                                defaultValue={
                                    userInfoGF && userInfoGF.permanent_address
                                }
                                label={"Permanent Address"}
                                validation={validation}
                                placeholder={""}
                            />
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3 mt-3">
                            <div className="row">
                                <div className="col-4 align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            textAlign: "center",
                                        }}
                                    >
                                        Village:
                                    </p>
                                </div>
                                <div className="col-8">
                                    <TextAreaInput
                                        formState={props.formState}
                                        name={"village"}
                                        defaultValue={
                                            userInfoGF && userInfoGF.village
                                        }
                                        label={"Village"}
                                        validation={validationName}
                                        placeholder={""}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mt-3">
                            <div className="row">
                                <div className="col-4 align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            textAlign: "center",
                                        }}
                                    >
                                        Thana:
                                    </p>
                                </div>
                                <div className="col-8">
                                    <TextAreaInput
                                        formState={props.formState}
                                        name={"thana"}
                                        label={"Thana"}
                                        defaultValue={
                                            userInfoGF && userInfoGF.thana
                                        }
                                        validation={validationName}
                                        placeholder={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-3 mt-3">
                            <div className="row">
                                <div className="col-4 align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            textAlign: "center",
                                        }}
                                    >
                                        Sub-division:
                                    </p>
                                </div>
                                <div className="col-8">
                                    <TextAreaInput
                                        defaultValue={
                                            userInfoGF &&
                                            userInfoGF.sub_division
                                        }
                                        formState={props.formState}
                                        name={"sub_division"}
                                        label={"Sub Division"}
                                        validation={validationName}
                                        placeholder={""}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>

            <div>
                <TextAreaInput
                    formState={props.formState}
                    name={"place"}
                    label={"Place"}
                    defaultValue={userInfoGF && userInfoGF.place}
                    validation={validationName}
                    placeholder={""}
                />
            </div>

            <br />
            <div className="row mt-3">
                <div className="">
                    <p style={{ fontFamily: "Muller", textAlign: "left" }}>
                        Statement Date:
                    </p>
                </div>
                <div className="col-6">
                    <DatePicker
                        formState={props.formState}
                        name={"statement_date"}
                        label={"statementDate"}
                        type={"date"}
                        defaultValue={userInfoGF && userInfoGF.statement_date}
                        validation={validation}
                        placeholder={""}
                    />
                </div>
                <div className="row mt-3">
                    <div>
                        <p style={{ fontFamily: "Muller", textAlign: "left" }}>
                            Signature Of Employee
                        </p>
                    </div>
                    <FilePicker
                        formState={props.formState}
                        name={"employee_signature"}
                        type={"file"}
                        defaultValue={
                            userInfoGF && userInfoGF.employee_signature
                        }
                        label={"Signature/Thumb-impression of the Employee"}
                        validation={validation}
                        placeholder={""}
                    />
                </div>
            </div>
            <hr />
        </div>
    );
}

export default GFFormStatement;
