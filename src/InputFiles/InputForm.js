import { TextField } from "@mui/material";
import React from "react";

function InputForm(props) {
    const { formState, label, name, validation, defaultValue } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <TextField
            //placeholder={label}
            label={label}
            type="text"
            id={name}
            fullWidth
            size="small"
            defaultValue={defaultValue}
            {...register(`${name}`, validation)}
            error={errors[name] !== undefined}
            helperText={errors[name]?.message}
        />
    );
}
export default InputForm;
