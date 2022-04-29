import { Box } from "@mui/material";
import React from "react";
import DatePicker from "../../InputFiles/DatePicker";
import FilePicker from "../../InputFiles/FileInput";
import TextAreaInput from "../../InputFiles/TextAreaInput";
import Validation from "../../validation/Validations";
import { useSelector } from "react-redux";

function GFCertificateEmployer(props) {
    const GFGetState = useSelector((state) => state.GFGetReducer);
    const { loadingGF, userInfoGF, errorGF } = GFGetState;

    const validation = Validation().validationDegree;

    return (
        <div>
            {/* <h6 className="text-center mt-5 mb-3">Certificate by the Employer</h6> */}
            <Box
                sx={{
                    bgcolor: "#cfe8fc",
                    height: "8vh",
                    fontSize: "4vh",
                    fontFamily: "Muller",
                    textAlign: "center",
                }}
            >
                Certificate by the Employer
            </Box>
            <br />
            <h5 style={{ fontFamily: "Muller", textAlign: "center" }}>
                Certified that the particulars of the above nomination have been
                verified and recorded in this establishment.
            </h5>

            <div>
                <TextAreaInput
                    formState={props.formState}
                    name={"employer_reference_no"}
                    defaultValue={
                        userInfoGF && userInfoGF.employer_reference_no
                    }
                    label={"Employer's Reference No"}
                    validation={validation}
                    placeholder={""}
                />
            </div>
            <br />
            <h5 style={{ fontFamily: "Muller", textAlign: "center" }}>
                Signature of the employer/Officer authorised Designation
            </h5>

            <div>
                <FilePicker
                    formState={props.formState}
                    name={"signature_of_the_employer"}
                    type={"file"}
                    label={
                        "Signature of the employer/Officer authorised Designation"
                    }
                    validation={validation}
                    placeholder={""}
                    defaultValue={
                        userInfoGF && userInfoGF.signature_of_the_employer
                    }
                />
            </div>
            <br />
            <h5 style={{ fontFamily: "Muller", textAlign: "center" }}>
                Date Of Establishment
            </h5>

            <div>
                <DatePicker
                    formState={props.formState}
                    name={"certificate_date"}
                    label={"Date"}
                    type={"date"}
                    validation={validation}
                    placeholder={""}
                    defaultValue={userInfoGF && userInfoGF.certificate_date}
                />
            </div>
            <br />
            <h5 style={{ fontFamily: "Muller", textAlign: "center" }}>
                Name Of Establishment
            </h5>
            <div>
                <div>
                    <TextAreaInput
                        formState={props.formState}
                        name={"name_of_the_establishment"}
                        label={"Name of the establishment"}
                        validation={validation}
                        placeholder={""}
                        defaultValue={
                            userInfoGF && userInfoGF.name_of_the_establishment
                        }
                    />
                </div>
                <br />
                <h5 style={{ fontFamily: "Muller", textAlign: "center" }}>
                    Address Of Establishment
                </h5>
                <div>
                    <TextAreaInput
                        formState={props.formState}
                        name={"address_of_the_establishment"}
                        label={"Address of the establishment"}
                        validation={validation}
                        placeholder={""}
                        defaultValue={
                            userInfoGF &&
                            userInfoGF.address_of_the_establishment
                        }
                    />
                </div>
                <br />
                <h5 style={{ fontFamily: "Muller", textAlign: "center" }}>
                    Proof Of Establishment
                </h5>
                <div>
                    <FilePicker
                        formState={props.formState}
                        name={"rubberStamp"}
                        type={"file"}
                        label={"rubber_stamp_there_of"}
                        validation={validation}
                        placeholder={""}
                        defaultValue={userInfoGF && userInfoGF.rubberStamp}
                    />
                </div>
                <br />
            </div>
        </div>
    );
}

export default GFCertificateEmployer;
