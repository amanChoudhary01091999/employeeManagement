import { FormHelperText, RadioGroup } from "@mui/material";
import React, { useState } from "react";
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
    const defaultValue = props.defaultValue;
    const row = props.row === undefined ? true : false;

    return (
        <div>
            {labelGroup ? (
                <label className="mr-4 font-weight-bold">{labelGroup}</label>
            ) : null}
            <RadioGroup row={row} defaultValue={defaultValue}>
                {radiogroups.map((radioItems, index) => (
                    <InputRadio
                        key={index}
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
