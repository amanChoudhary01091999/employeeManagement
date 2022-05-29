import { Person } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

function TextInput(props) {
    const { label, id, formState, value, validation, icon, type, disabled } =
        props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <TextField
            label={label}
            id={id}
            disabled={disabled}
            type={type}
            autoComplete={"off"}
            defaultValue={value}
            variant="outlined"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                ),
            }}
            error={errors[id] !== undefined}
            helperText={errors[id]?.message}
            {...register(id, validation)}
        />
    );
}

export default TextInput;
