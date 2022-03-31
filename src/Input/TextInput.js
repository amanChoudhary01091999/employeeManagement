import { TextField } from "@mui/material";
import React from "react";

function TextInput(props) {
    const { label, id, formState, value, validation } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <TextField
            label={label}
            id={id}
            defaultValue={value}
            variant="outlined"
            error={errors[id] !== undefined}
            helperText={errors[id]?.message}
            {...register(id, validation)}
        />
    );
}

export default TextInput;
