import React, { useEffect } from "react";
import DatePicker from "../../InputFiles/DatePicker";
import InputForm from "../../InputFiles/TextAreaInput";
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import Validation from "../../validation/Validations";
import "../BackGroundVerification/index.css";
import { useDispatch, useSelector } from "react-redux";

function EPFFormDetail(props) {
    const { formState } = props;
    const dispatch = useDispatch();
    const { loadingEPF, userInfoEPF } = useSelector(
        (state) => state.EPFGetReducer
    );
    const validation = Validation().validationDegree;
    const phoneValidation = Validation().validationPhone;
    const emailValidation = Validation().validationEmail;
    const { watch } = formState;
    const stateOfProvident = watch("provident_member", "No");
    const stateOfPension = watch("pension_member", "No");
    const stateOfWorker = watch("international_worker", "No");

    return (
        <div style={{ textAlign: "left" }}>
            <table className="table table-bordered align-middle mt-4">
                <tbody>
                    <tr>
                        <td className="text-center" scope="row">
                            1
                        </td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Name of the member:
                                    </p>
                                </div>
                                <div className="col-9">
                                    <InputForm
                                        formState={formState}
                                        label={"Name"}
                                        name={"name_of_the_member"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.name_of_the_member
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row">
                            2
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-4">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Father's Name:
                                    </p>
                                    <p
                                        className="mb-0 bottom-text"
                                        style={{ textAlign: "left" }}
                                    >
                                        (Please whichever is applicable)
                                    </p>
                                </div>
                                <div className="col-8 align-self-center">
                                    <InputForm
                                        formState={formState}
                                        label={"Father's Name"}
                                        name={"fathers_name"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.fathers_name
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-4 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Spouse Name:
                                    </p>
                                </div>
                                <div className="col-8">
                                    <InputForm
                                        formState={formState}
                                        label={"Spouse Name"}
                                        name={"Spouse_name"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.Spouse_name
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row">
                            3
                        </td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Date of Birth:
                                    </p>
                                </div>
                                <div className="col-9">
                                    <DatePicker
                                        formState={formState}
                                        type={"date"}
                                        name={"date_of_birth"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.date_of_birth
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row">
                            4
                        </td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Gender:
                                    </p>
                                </div>
                                <div className="col-9">
                                    <InputRadioGroup
                                        formState={formState}
                                        label={["Male", "Female", "Other"]}
                                        labelGroup={null}
                                        name={"gender"}
                                        defaultValue={
                                            userInfoEPF && userInfoEPF.gender
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row">
                            5
                        </td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Marital Status:
                                    </p>
                                </div>
                                <div className="col-9">
                                    <InputRadioGroup
                                        formState={formState}
                                        label={[
                                            "Married",
                                            "Unmarried",
                                            "Widow",
                                            "Widower",
                                            "Divorcee",
                                        ]}
                                        labelGroup={null}
                                        name={"marital_status"}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.marital_status
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row">
                            6
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-4">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Email id:
                                    </p>
                                </div>
                                <div className="col-8 align-self-center">
                                    <InputForm
                                        formState={formState}
                                        label={"Email id"}
                                        name={"email_id"}
                                        validation={emailValidation}
                                        defaultValue={
                                            userInfoEPF && userInfoEPF.email_id
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-4 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Mobile Number:
                                    </p>
                                </div>
                                <div className="col-8">
                                    <InputForm
                                        formState={formState}
                                        label={"Phone Number"}
                                        type={"tel"}
                                        name={"mobile_number"}
                                        validation={phoneValidation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.mobile_number
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row">
                            7
                        </td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-6 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Whether earlier a member of Employees
                                        Provident Scheme 1952:
                                    </p>
                                </div>
                                <div className="col-6">
                                    <InputRadioGroup
                                        formState={formState}
                                        label={["Yes", "No"]}
                                        labelGroup={null}
                                        name={"provident_member"}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.provident_member
                                                ? "Yes"
                                                : "No"
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row">
                            8
                        </td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-6 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        Whether earlier a member of Employees
                                        Pension Scheme 1952:
                                    </p>
                                </div>
                                <div className="col-6">
                                    <InputRadioGroup
                                        formState={formState}
                                        label={["Yes", "No"]}
                                        labelGroup={null}
                                        name={"pension_member"}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.pension_member
                                                ? "Yes"
                                                : "No"
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    {stateOfProvident === "Yes" || stateOfPension === "Yes" ? (
                        <>
                            <tr>
                                <td
                                    className="text-center"
                                    rowSpan="6"
                                    scope="row"
                                >
                                    9
                                </td>
                                <td colSpan="2">
                                    <div className="row align-center">
                                        <div className="col-6 align-self-center">
                                            <p
                                                className="mb-0"
                                                style={{ textAlign: "left" }}
                                            >
                                                Previous employment details :
                                                [if yes to Point 7 AND/OR 8
                                                above):
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <InputForm
                                                formState={formState}
                                                label={
                                                    "Previous employment details"
                                                }
                                                name={
                                                    "previous_employment_details"
                                                }
                                                validation={validation}
                                                defaultValue={
                                                    userInfoEPF &&
                                                    userInfoEPF.previous_employment_details
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
                                                className="mb-0"
                                                style={{ textAlign: "left" }}
                                            >
                                                a) Universal Account Number:
                                            </p>
                                        </div>
                                        <div className="col-9">
                                            <InputForm
                                                formState={formState}
                                                label={
                                                    "Universal Account Number"
                                                }
                                                name={"universal_accountnumber"}
                                                validation={validation}
                                                defaultValue={
                                                    userInfoEPF &&
                                                    userInfoEPF.universal_accountnumber
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
                                                className="mb-0"
                                                style={{ textAlign: "left" }}
                                            >
                                                b) Previous PF Account Number:
                                            </p>
                                        </div>
                                        <div className="col-9">
                                            <InputForm
                                                formState={formState}
                                                label={
                                                    "Previous PF Account Number"
                                                }
                                                name={"pfaccNumber"}
                                                validation={validation}
                                                defaultValue={
                                                    userInfoEPF &&
                                                    userInfoEPF.pfaccNumber
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className="row align-center">
                                        <div className="col-4 align-self-center">
                                            <p
                                                className="mb-0"
                                                style={{ textAlign: "left" }}
                                            >
                                                c) Date of Exit from previous
                                                employment:
                                            </p>
                                        </div>
                                        <div className="col-8">
                                            <DatePicker
                                                formState={formState}
                                                label={""}
                                                name={
                                                    "date_of_exit_from_previous_employment"
                                                }
                                                type={"date"}
                                                validation={validation}
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className="row align-center">
                                        <div className="col-4 align-self-center">
                                            <p
                                                className="mb-0"
                                                style={{ textAlign: "left" }}
                                            >
                                                d) Scheme Certificate No. (if
                                                issued):
                                            </p>
                                        </div>
                                        <div className="col-8">
                                            <InputForm
                                                formState={formState}
                                                label={"Scheme Certificate No."}
                                                name={
                                                    "scheme_certificate_number"
                                                }
                                                validation={{}}
                                                defaultValue={
                                                    userInfoEPF &&
                                                    userInfoEPF.scheme_certificate_number
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className="row align-center">
                                        <div className="col-4 align-self-center">
                                            <p
                                                className="mb-0"
                                                style={{ textAlign: "left" }}
                                            >
                                                e) Pension Payment Order (PP)
                                                No. (if issued):
                                            </p>
                                        </div>
                                        <div className="col-8">
                                            <InputForm
                                                formState={formState}
                                                label={
                                                    "Pension Payment Order (PP) No"
                                                }
                                                name={
                                                    "pension_payment_order_number"
                                                }
                                                validation={{}}
                                                defaultValue={
                                                    userInfoEPF &&
                                                    userInfoEPF.pension_payment_order_number
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>{" "}
                        </>
                    ) : null}
                    <tr>
                        <td
                            className="text-center"
                            rowSpan="1"
                            scope="row"
                        ></td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        a) International Worker:
                                    </p>
                                </div>
                                <div className="col-9">
                                    <InputRadioGroup
                                        formState={formState}
                                        label={["Yes", "No"]}
                                        labelGroup={null}
                                        name={"international_worker"}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.international_worker
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    {stateOfWorker === "Yes" ? (
                        <>
                            <tr>
                                <td
                                    className="text-center"
                                    rowSpan="3"
                                    scope="row"
                                >
                                    10
                                </td>
                                <td colSpan="2">
                                    <div className="row align-center">
                                        <div className="col-6 align-self-center">
                                            <p
                                                className="mb-0"
                                                style={{ textAlign: "left" }}
                                            >
                                                b) If yes, state country of
                                                origin (India/name of other
                                                country):
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <InputForm
                                                formState={formState}
                                                label={"country of origin"}
                                                name={"country_of_origin"}
                                                validation={validation}
                                                defaultValue={
                                                    userInfoEPF &&
                                                    userInfoEPF.country_of_origin
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
                                                className="mb-0"
                                                style={{ textAlign: "left" }}
                                            >
                                                c) Passport Number:
                                            </p>
                                        </div>
                                        <div className="col-9">
                                            <InputForm
                                                formState={formState}
                                                label={"Passport Number"}
                                                name={"passport_number"}
                                                validation={validation}
                                                defaultValue={
                                                    userInfoEPF &&
                                                    userInfoEPF.passport_number
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
                                                className="mb-0"
                                                style={{ textAlign: "left" }}
                                            >
                                                d) Validity of passport:
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <DatePicker
                                                formState={formState}
                                                label={null}
                                                name={"passport_valid_from"}
                                                type={"date"}
                                                validation={validation}
                                            />
                                        </div>
                                        <div className="col-1 align-self-center">
                                            <p className="mb-0 text-center">
                                                to
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <DatePicker
                                                formState={formState}
                                                label={null}
                                                name={"passport_valid_to"}
                                                type={"date"}
                                                validation={validation}
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>{" "}
                        </>
                    ) : null}
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            <b>KYC Details</b> : (attach self attested copies of
                            the following KYC's)
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" rowSpan="4" scope="row">
                            11
                        </td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        a) Bank Account No.:
                                    </p>
                                </div>
                                <div className="col-9">
                                    <InputForm
                                        formState={formState}
                                        label={"Bank Account No."}
                                        name={"bank_account_no"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.bank_account_no
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
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        b) IFSC Code:
                                    </p>
                                </div>
                                <div className="col-9">
                                    <InputForm
                                        formState={formState}
                                        label={"IFSC Code"}
                                        name={"IFSCode"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF && userInfoEPF.IFSCode
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
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        c) Aadhar Number:
                                    </p>
                                </div>
                                <div className="col-9">
                                    <InputForm
                                        formState={formState}
                                        label={"Aadhar Number"}
                                        name={"aadhar_number"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.aadhar_number
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-5 align-self-center">
                                    <p
                                        className="mb-0"
                                        style={{ textAlign: "left" }}
                                    >
                                        d) Permanent Account Number (PAN) if
                                        available:
                                    </p>
                                </div>
                                <div className="col-7">
                                    <InputForm
                                        formState={formState}
                                        label={"Permanent Account Number (PAN)"}
                                        name={"pan"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF && userInfoEPF.pan
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

export default EPFFormDetail;
