import { Box } from "@mui/system";
import React from "react";
import DatePicker from "../../InputFiles/DatePicker";
import TextAreaInput from "../../InputFiles/TextAreaInput";
import FilePicker from "../../InputFiles/FileInput";
import { useSelector, useDispatch } from "react-redux";

import Validation from "../../validation/Validations";

function RAFCHeading(props) {
    const RCAFGetState = useSelector((state) => state.RCAFGetReducer);
    const { loadingRCAF, errorRCAF, userInfoRCAF } = RCAFGetState;

    const validation = Validation().validationAddress;

    return (
        <>
            <div>
                <p
                    style={{
                        fontFamily: "Muller",
                        fontSize: "20px",
                        textAlign: "left",
                        marginTop: "30px",
                        marginRight: "10px",
                    }}
                >
                    I certify that the statements made and information provided
                    during my employment application & interview process
                    (including my resume) and in this application are valid and
                    complete to the best of my knowledge. I understand that
                    false or misleading information may result in refusal /
                    termination of employment immediate dismissal of my
                    employment. If upon investigation, any of this information
                    is found to be incomplete or inaccurate, I understand that I
                    will be subject to dismissal at any point during my
                    employment. I hereby authorize NDHGO and/or any of it
                    subsidiaries or affiliates, and any person(s) or
                    organization(s) working on its behalf to verify the
                    information presented in this application form to procure an
                    investigative report or consumer report for that purpose and
                    to access or to be provided with full details of my previous
                    records.
                    <br />
                    <br />
                    I recognize that in connection with employment with NDHGO/
                    its subsidiaries / associated group companies, I may be
                    subjected to a background enquiry by NDHGO/ its subsidiaries
                    / associated group companies or its representative, an
                    outside agency, and I hereby authorize the same.
                    <br />
                    <br />
                    I understand that NDHGO/ its subsidiaries / associated group
                    companies may use an outside agency to verify & validate the
                    information I have provided including my employment, my
                    professional standing, work history and qualifications. And
                    that such ASDintech Services Pvt.Ltd. authorised on behalf
                    of NDHGO for conducting background and professional
                    verification may obtain information it deems appropriate
                    from various sources including, but not limited to, the
                    following current and past employers, college records and
                    professional and personal references. I authorize, without
                    reservation, any individual, corporation or other private or
                    public entity to furnish NDHGO/ its subsidiaries /
                    associated group companies & the outside background agency
                    all information about me. I unconditionally release & hold
                    harmless any individual, corporation, or private or public
                    entity from any & all causes of action that might arise from
                    furnishing to NDHGO/ its subsidiaries / associated group
                    companies & outside agency, information that they may
                    request pursuant to this release.
                    <br />
                    <br />
                    This authorization shall be valid for this and any future
                    reports and updates that may be requested.
                </p>
                <table className="table table-bordered align-middle mt-4">
                    <tbody>
                        <tr>
                            <td>
                                <Box
                                    sx={{
                                        bgcolor: "#cfe8fc",
                                        height: "5vh",
                                        fontSize: "3vh",
                                        fontFamily: "Muller",
                                        textAlign: "center",
                                    }}
                                >
                                    Signed
                                </Box>
                            </td>
                            <td>
                                {" "}
                                <Box
                                    sx={{
                                        bgcolor: "#cfe8fc",
                                        height: "5vh",
                                        fontSize: "3vh",
                                        fontFamily: "Muller",
                                        textAlign: "center",
                                    }}
                                >
                                    Name in Block Capitals
                                </Box>
                            </td>
                            <td>
                                {" "}
                                <Box
                                    sx={{
                                        bgcolor: "#cfe8fc",
                                        height: "5vh",
                                        fontSize: "3vh",
                                        fontFamily: "Muller",
                                        textAlign: "center",
                                    }}
                                >
                                    Place
                                </Box>
                            </td>
                            <td>
                                {" "}
                                <Box
                                    sx={{
                                        bgcolor: "#cfe8fc",
                                        height: "5vh",
                                        fontSize: "3vh",
                                        fontFamily: "Muller",
                                        textAlign: "center",
                                    }}
                                >
                                    Date
                                </Box>
                            </td>

                            {/* <td className="text-center">Name in Block Capitals</td> */}
                            {/* <td className="text-center">Place</td> */}
                            {/* <td className="text-center">Date</td> */}
                        </tr>
                        <tr>
                            <td>
                                <FilePicker
                                    formState={props.formState}
                                    name={"candidateSingnature"}
                                    label={null}
                                    type={"file"}
                                    validation={validation}
                                    defaultValue={
                                        userInfoRCAF &&
                                        userInfoRCAF.candidateSingnature
                                    }
                                    placeholder={""}
                                />
                            </td>
                            <td>
                                <TextAreaInput
                                    formState={props.formState}
                                    defaultValue={
                                        userInfoRCAF &&
                                        userInfoRCAF.candidateName
                                    }
                                    name={"candidateName"}
                                    label={"Name"}
                                    validation={validation}
                                    placeholder={""}
                                />
                            </td>
                            <td>
                                <TextAreaInput
                                    formState={props.formState}
                                    name={"candidatePlace"}
                                    label={"Place"}
                                    validation={validation}
                                    defaultValue={
                                        userInfoRCAF &&
                                        userInfoRCAF.candidatePlace
                                    }
                                    placeholder={""}
                                />
                            </td>
                            <td>
                                <DatePicker
                                    formState={props.formState}
                                    name={"candidateDate"}
                                    type={"date"}
                                    defaultValue={
                                        userInfoRCAF &&
                                        userInfoRCAF.candidateDate
                                    }
                                    label={null}
                                    validation={validation}
                                    placeholder={""}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p
                    style={{
                        fontFamily: "Muller",
                        fontSize: "20px",
                        textAlign: "center",
                        marginTop: "30px",
                        marginRight: "10px",
                    }}
                >
                    <strong>
                        Note : All fields below are mandatory hence do not leave
                        any blanks. Provide Complete & accurate Information
                    </strong>
                </p>
                <hr className="my-5" />
            </div>
        </>
    );
}

export default RAFCHeading;
