import React from "react";

import TextAreaInput from "../../InputFiles/TextAreaInput";
import Validation from "../../validation/Validations";
import DatePicker from "../../InputFiles/DatePicker";
import { Box } from "@mui/material";
import FilePicker from "../../InputFiles/FileInput";
import { useSelector, useDispatch } from "react-redux";

function GFFormDeclaration(props) {
    const GFGetState = useSelector((state) => state.GFGetReducer);
    const { loadingGF, userInfoGF, errorGF } = GFGetState;

    const validationName = Validation().validationName;
    const validation = Validation().validationDegree;
    return (
        <div>
            <Box
                sx={{
                    bgcolor: "#cfe8fc",
                    height: "8vh",
                    fontSize: "4vh",
                    fontFamily: "Muller",
                    textAlign: "center",
                }}
            >
                Declaration by Witnesses
            </Box>
            <br />
            {/* <h6 className="text-center mt-5 mb-3">Declaration by Witnesses</h6> */}
            <h5 style={{ fontFamily: "Muller", textAlign: "center" }}>
                Nomination signed/thumb-impressed before me
            </h5>
            <div className="row">
                <div className="col-6">
                    <TextAreaInput
                        formState={props.formState}
                        name={"name_of_witnesses"}
                        label={"Name of witnesses"}
                        validation={validationName}
                        placeholder={""}
                        defaultValue={
                            userInfoGF && userInfoGF.name_of_witnesses
                        }
                    />
                </div>
                <div className="col-6">
                    <FilePicker
                        formState={props.formState}
                        name={"signature_of_witnesses"}
                        label={"Signature of witnesses"}
                        type={"file"}
                        validation={validation}
                        defaultValue={
                            userInfoGF && userInfoGF.signature_of_witnesses
                        }
                        placeholder={""}
                    />
                </div>
                <div className="col-12 mt-3">
                    <TextAreaInput
                        rows="3"
                        formState={props.formState}
                        name={"address_of_witnesses"}
                        label={"Address of witnesses"}
                        validation={validation}
                        defaultValue={
                            userInfoGF && userInfoGF.address_of_witnesses
                        }
                        placeholder={""}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <TextAreaInput
                        formState={props.formState}
                        name={"witnesses_place"}
                        label={"Place"}
                        validation={validationName}
                        defaultValue={userInfoGF && userInfoGF.witnesses_place}
                        placeholder={""}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <DatePicker
                        formState={props.formState}
                        name={"witnesses_date"}
                        label={"Date"}
                        defaultValue={userInfoGF && userInfoGF.witnesses_date}
                        type={"date"}
                        validation={validation}
                        placeholder={""}
                    />
                </div>
            </div>
            <hr />
            <br />
        </div>
    );
}

export default GFFormDeclaration;
