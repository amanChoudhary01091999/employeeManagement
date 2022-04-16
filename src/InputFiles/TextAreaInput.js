import React from "react";
import { TextField } from "@mui/material";

function TextAreaInput(props) {
    const { formState, label, name, validation, defaultValue } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <div className="form-group">
            <TextField
                label={label}
                type="text"
                variant="outlined"
                id={name}
                multiline
                fullWidth
                defaultValue={defaultValue}
                {...register(`${name}`, validation)}
                error={errors[name] !== undefined}
                helperText={errors[name]?.message}
            />
        </div>
    );
}

export default TextAreaInput;
