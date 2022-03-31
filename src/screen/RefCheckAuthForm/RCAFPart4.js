import React from "react";
import DatePicker from '../../InputFiles/DatePicker'
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'

function RCAFPart4(props) {
    return (
        <div>
            <table className="table table-bordered align-middle mt-4">
                <tbody>
                    <tr>
                        <td>
                            <div className="row align-center">
                                <div className="col-6 align-self-center">
                                    <p className="mb-0">
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
