import React from "react";
import { useSelector } from "react-redux";
import DatePicker from "../../InputFiles/DatePicker";
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import TextAreaInput from "../../InputFiles/TextAreaInput";
import Validation from "../../validation/Validations";

function RCAFPart4(props) {
    const { loadingRCAF, errorRCAF, userInfoRCAF } = useSelector(
        (state) => state.RCAFGetReducer
    );
    return (
        <div>
            <table className="table table-bordered align-middle mt-4">
                <tbody>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-6 align-self-center">
                                    <p
                                        style={{
                                            fontFamily: "Muller",
                                            fontSize: "20px",
                                            textAlign: "left",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Whether to contact the current employer
                                        :
                                    </p>
                                </div>
                                <div className="col">
                                    <InputRadioGroup
                                        formState={props.formState}
                                        label={["Yes", "No"]}
                                        labelGroup={null}
                                        name={"contact_current_employer"}
                                        defaultValue={
                                            userInfoRCAF &&
                                            userInfoRCAF.contact_current_employer
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

export default RCAFPart4;
