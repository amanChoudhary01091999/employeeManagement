import { TextField } from "@mui/material";
import React from "react";

function DatePicker(props) {
    const { formState, label, name, validation, type } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <div>
            <div>
                <TextField
                    type={type}
                    id={name}
                    variant="filled"
                    size="small"
                    fullWidth
                    {...register(`${name}`, validation)}
                    error={errors[name] !== undefined}
                    helperText={errors[name]?.message}
                />
            </div>
        </div>
    );
}

export default DatePicker;
