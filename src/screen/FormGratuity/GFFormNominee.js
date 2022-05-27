import React from "react";

import TextAreaInput from "../../InputFiles/TextAreaInput";
import Validation from "../../validation/Validations";
import DatePicker from "../../InputFiles/DatePicker";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";

function GFFormNominee(props) {
    const GFGetState = useSelector((state) => state.GFGetReducer);
    const { loadingGF, userInfoGF, errorGF } = GFGetState;

    const validation = Validation().validationDegree;
    const validationName = Validation().validationName;
    const validationNumber = Validation().validationNumber;
    return (
        <div>
            <h5 style={{ fontFamily: "Muller", textAlign: "center" }}>
                Nominee(s)
            </h5>
            <table
                className="table table-bordered align-middle mt-4"
                style={{ backgroundColor: "#cfe8fc" }}
            >
                <thead>
                    {/* <th className="text-center">Sl.No.</th> */}
                    <th
                        className="text-center"
                        style={{
                            fontSize: "3vh",
                            fontFamily: "Muller",
                            textAlign: "center",
                        }}
                    >
                        Sl.No
                    </th>
                    <th
                        className="text-center"
                        style={{
                            fontSize: "3vh",
                            fontFamily: "Muller",
                            textAlign: "center",
                        }}
                    >
                        Name in full with full address of nominee(s)
                    </th>
                    <th
                        className="text-center"
                        style={{
                            fontSize: "3vh",
                            fontFamily: "Muller",
                            textAlign: "center",
                        }}
                    >
                        Relationship with the employee
                    </th>
                    <th
                        className="text-center"
                        style={{
                            fontSize: "3vh",
                            fontFamily: "Muller",
                            textAlign: "center",
                        }}
                    >
                        DOB of nominee
                    </th>
                    <th
                        className="text-center"
                        style={{
                            fontSize: "3vh",
                            fontFamily: "Muller",
                            textAlign: "center",
                        }}
                    >
                        Proportion by which the gratuity will be shared
                    </th>
                </thead>
                <tbody>
                    {/* <tr>
                        <td></td>
                        <td className="text-center">(1)</td>
                        <td className="text-center">(2)</td>
                        <td className="text-center">(3)</td>
                        <td className="text-center">(4)</td>
                    </tr> */}
                    <tr>
                        <td className="text-center">1.</td>
                        <td>
                            <TextAreaInput
                                formState={props.formState}
                                name={"nominee_full_name_and_address"}
                                label={"Name"}
                                validation={validationName}
                                defaultValue={
                                    userInfoGF &&
                                    userInfoGF.nominee_full_name_and_address
                                }
                                placeholder={""}
                            />
                        </td>
                        <td>
                            <TextAreaInput
                                formState={props.formState}
                                name={"relationship_with_nominee"}
                                label={"Relationship"}
                                defaultValue={
                                    userInfoGF &&
                                    userInfoGF.relationship_with_nominee
                                }
                                validation={validationName}
                                placeholder={""}
                            />
                        </td>
                        <td>
                            <DatePicker
                                type={"date"}
                                formState={props.formState}
                                name={"dob_of_nominee"}
                                label={null}
                                defaultValue={
                                    userInfoGF && userInfoGF.dob_of_nominee
                                }
                                validation={validation}
                                placeholder={""}
                            />
                        </td>
                        <td>
                            <TextAreaInput
                                formState={props.formState}
                                name={"shared_proportion"}
                                label={"Shared Proposition in %"}
                                validation={validationNumber}
                                defaultValue={
                                    userInfoGF && userInfoGF.shared_proportion
                                }
                                placeholder={""}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
        </div>
    );
}

export default GFFormNominee;
