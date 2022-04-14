import React from "react";
import { useSelector } from "react-redux";
import DatePicker from "../../InputFiles/DatePicker";
import FilePicker from "../../InputFiles/FileInput";
import InputCkeckBox from "../../InputFiles/InputCkeckBox";
import InputForm from "../../InputFiles/InputForm";
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import Validation from "../../validation/Validations";

function EPFUntrackingDeclaration(props) {
    const formState = props.formState;
    const validation = Validation().validationDegree;
    const {
        formState: { errors },
        watch,
    } = formState;
    const { loadingEPF, userInfoEPF } = useSelector(
        (state) => state.EPFGetReducer
    );
    // const value = watch('The KYC details of the above members in the UAN database')
    // const value2 = watch('The above PF Account number/UAN of the member as mentioned in (A) above has been tagged with his/her UAN/Previous member  ID as declared by the member')
    // console.log(value)
    // console.log(value2)
    return (
        <div style={{ textAlign: "left" }}>
            <table className="table table-bordered align-middle mt-5">
                <tbody>
                    <tr>
                        <td colSpan="3" className="text-center" scope="row">
                            <b>UNDERTAKING</b>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            1) Certified that the particulars are true to the
                            best of my knowledge
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            2) I authorize EPFO to use my Aadhar for
                            verification/ authentication /eKYC purpose for
                            service delivery
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            3) Kindly transfer the funds and service details, if
                            applicable, from the previous PF account as declared
                            above to the present P.F Account (The transfer would
                            be possible only if the identified KYC details
                            approved by previous employer has been verified by
                            present employer using the Digital Signature
                            Certificate)
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            4) In case of changes in the above details, the same
                            will be intimated to the employer at the earliest
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-2 align-self-center">
                                    <p className="mb-0">Date:</p>
                                </div>
                                <div className="col-10">
                                    <DatePicker
                                        formState={formState}
                                        label={null}
                                        name={"date_of_undertaking"}
                                        type={"date"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.date_of_undertaking
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td>
                            <div className="row align-center">
                                <div className="col-4 align-self-center">
                                    <p className="mb-0">Place:</p>
                                </div>
                                <div className="col-8">
                                    <InputForm
                                        formState={formState}
                                        label={"Place"}
                                        name={"place"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF && userInfoEPF.place
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-4 align-self-center">
                                    <p className="mb-0">Signature of member:</p>
                                </div>
                                <div className="col-8">
                                    <FilePicker
                                        formState={formState}
                                        label={null}
                                        name={"signature_of_member"}
                                        type={"file"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.signature_of_member
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="text-center" scope="row">
                            <b>DECLARATION BY PRESENT EMPLOYER</b>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p className="mb-0">
                                        A. The member Mr./Ms./ Mrs.
                                    </p>
                                </div>
                                <div className="col-7">
                                    <InputForm
                                        formState={formState}
                                        label={"Name of the present Employee"}
                                        name={"name_of_present_employee"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.name_of_present_employee
                                        }
                                    />
                                </div>
                                <div className="col-2 align-self-center">
                                    <p className="mb-0">has joined on</p>
                                </div>
                                <div className="col-3 mt-3">
                                    <DatePicker
                                        formState={formState}
                                        label={null}
                                        name={"joined_date"}
                                        type={"date"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.joined_date
                                        }
                                    />
                                </div>
                                <div className="col-3 mt-3 align-self-center">
                                    <p className="mb-0 text-center">
                                        and has been alloted PF Number
                                    </p>
                                </div>
                                <div className="col-6 mt-3">
                                    <InputForm
                                        formState={formState}
                                        label={"PF Number"}
                                        name={"pf_number"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF && userInfoEPF.pf_number
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            <p className="mb-0">
                                B. In case the person was earlier not a member
                                of EPF Scheme, 1952 and EPS, 1995
                            </p>
                            <div className="row align-center mt-3">
                                <div className="col-6 align-self-center">
                                    <p className="mb-0">
                                        <b>(Post allotment of UAN)</b> The UAN
                                        allotted for the member is{" "}
                                    </p>
                                </div>
                                <div className="col-6">
                                    <InputForm
                                        formState={formState}
                                        label={"UAN Number"}
                                        name={"uan_number"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF &&
                                            userInfoEPF.uan_number
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            <p className="mb-0">
                                <b>Please Tick the Appropriate Option:</b>
                            </p>
                            <p className="mb-0">
                                The KYC details of the above members in the UAN
                                database
                            </p>
                            <InputRadioGroup
                                formState={formState}
                                name={"kyc_details_in_uan_database"}
                                labelGroup={null}
                                row={false}
                                label={[
                                    "Have not been uploaded",
                                    "Have been uploaded but not approved",
                                    "Have been uploaded and approved with DSC",
                                ]}
                                defaultValue={
                                    userInfoEPF &&
                                    userInfoEPF.kyc_details_in_uan_database
                                }
                            />
                            {/* <InputCkeckBox
                                formState={formState}
                                label={"Have not been uploaded"}
                                name={"kyc_details_in_uan_database"}
                                validation={validation}
                            />

                            <InputCkeckBox
                                formState={formState}
                                label={"Have been uploaded but not approved"}
                                name={"kyc_details_in_uan_database"}
                                validation={validation}
                            />

                            <InputCkeckBox
                                formState={formState}
                                label={
                                    "Have been uploaded and approved with DSC"
                                }
                                name={"kyc_details_in_uan_database"}
                                validation={validation}
                            /> */}
                            <div className="text-danger">
                                <small>
                                    {
                                        errors[
                                            "The KYC details of the above members in the UAN database"
                                        ]?.message
                                    }
                                </small>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" scope="row"></td>
                        <td colSpan="2">
                            <p className="mb-0">
                                C. In case the person was earlier a member of
                                the EPF Scheme, 1952 and EPS, 1995:
                            </p>
                            <p className="mb-0">
                                The above PF Account number/UAN of the member as
                                mentioned in (A) above has been tagged with
                                his/her UAN/Previous member ID as declared by
                                the member
                            </p>
                            <p className="mb-0">
                                <b>Please Tick the Appropriate Option:</b>
                            </p>
                            <InputCkeckBox
                                formState={formState}
                                label={
                                    "The KYC details of the above member in the UAN database have been approved with Digital Signature Certificate and transfer request has been generated on portal"
                                }
                                name={"kyc_details"}
                                validation={validation}
                                defaultValue={
                                    userInfoEPF && userInfoEPF.kyc_details
                                }
                            />
                            <InputCkeckBox
                                formState={formState}
                                label={
                                    "As the DSC of establishment are not registered with EPFO, the member has been informed to file physical claim (Form 13) for transfer of finds from the previous establishment"
                                }
                                name={"dsc_approved"}
                                validation={validation}
                                defaultValue={
                                    userInfoEPF && userInfoEPF.kyc_details
                                }
                            />
                            <div className="text-danger">
                                <small>{errors["dsc_approved"]?.message}</small>
                            </div>
                            {/* <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="digitalSignature" />
                                <label className="form-check-label" for="digitalSignature">
                                    The KYC details of the above member in the UAN database have been approved with Digital Signature Certificate and transfer
                                    request has been generated on portal
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="notRegisteredEPFO" />
                                <label className="form-check-label" for="notRegisteredEPFO">
                                    As the DSC of establishment are not registered with EPFO, the member has been informed to file physical claim (Form 13) for
                                    transfer of finds from the previous establishment
                                </label>
                            </div> */}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p className="mb-0">Date</p>
                                </div>
                                <div className="col-9">
                                    <DatePicker
                                        formState={formState}
                                        label={null}
                                        name={"employer_date"}
                                        type={"date"}
                                        validation={validation}
                                        defaultValue={
                                            userInfoEPF && userInfoEPF.date
                                        }
                                    />
                                </div>
                            </div>
                        </td>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-7 align-self-center">
                                    <p className="mb-0">
                                        Signature of Employer with Seal of
                                        Establishment
                                    </p>
                                </div>
                                <div className="col-5">
                                    <FilePicker
                                        formState={formState}
                                        label={null}
                                        name={"signature_employer"}
                                        type={"file"}
                                        validation={validation}
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

export default EPFUntrackingDeclaration;
