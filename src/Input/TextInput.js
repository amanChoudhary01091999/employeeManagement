import { TextField } from "@mui/material";
import React from "react";

function TextInput(props) {
    const { label, id, formState } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <TextField
            label={label}
            id={id}
            variant="outlined"
            error={errors[id] !== undefined}
            helperText={errors[id]?.message}
            {...register(id, {
                required: {
                    value: true,
                    message: "this feild is required",
                },
            })}
        />
    );
}

export default TextInput;
