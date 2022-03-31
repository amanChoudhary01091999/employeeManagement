import { FormHelperText, RadioGroup } from "@mui/material";
import React from "react";
import Validation from "../validation/Validations";

import InputRadio from "./InputRadio";

function InputRadioGroup(props) {
    const {
        formState: { errors },
    } = props.formState;
    const validation = Validation().validationDegree;
    const radiogroups = props.label;
    const name = props.name;
    const labelGroup = props.labelGroup;
    const row = props.row === undefined ? true : false;

    return (
        <div>
            {labelGroup ? (
                <label class="mr-4 font-weight-bold">{labelGroup}</label>
            ) : null}
            <RadioGroup row={row}>
                {radiogroups.map((radioItems) => (
                    <InputRadio
                        formState={props.formState}
                        label={radioItems}
                        name={name}
                        validation={validation}
                    />
                ))}
                <FormHelperText error={true}>
                    {errors[name]?.message}
                </FormHelperText>
            </RadioGroup>
        </div>
    );
}
export default InputRadioGroup;
