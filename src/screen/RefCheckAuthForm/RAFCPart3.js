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
            <h4 style={{ backgroundColor: "aliceblue" }} className="mb-4 p-3">
                #Details of {stateOfEmployer} Employer{" "}
                {stateOfEmployer === "current" ? "" : number} :-{" "}
            </h4>

            <table className="table table-bordered align-middle mt-4">
                <tbody>
                    <tr>
                        <td className="col-6">
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Company Name :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`company_name_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                        <td className="col-6">
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Position Held :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
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
                                    <p className="mb-0">Department :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`department_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Telephone :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
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
                                    <p className="mb-0">
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
                                    <p className="mb-0">
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
                                    <p className="mb-0">
                                        Address : (main office & branch where
                                        worked) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
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
                                    <p className="mb-0">
                                        Agency Details (if temporary or
                                        contractual) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
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
                                    <p className="mb-0">
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
                                    <p className="mb-0">
                                        Employee Code ({number}) :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
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
                                <div className="col">
                                    Reporting details: (Last Supervisor) :
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Name :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`RD_name_${number}`}
                                        validation={validationAddress}
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Position :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
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
                                    <p className="mb-0">Contact No. :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`RD_contactNo_${number}`}
                                        validation={validationPhone}
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">
                                        Remunerations / Salary CTC / Gross per
                                        month] :
                                    </p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
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
                                    <p className="mb-0">
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
                                                label={null}
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
