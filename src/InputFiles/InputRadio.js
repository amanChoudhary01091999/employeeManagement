import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

function InputRadio(props) {
    const { formState, label, name, validation } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <div class="form-check form-check-inline">
            <FormControlLabel
                value={label}
                control={<Radio size="small" color="success" />}
                label={label}
                {...register(`${name}`, validation)}
            />
        </div>
    );
}

export default InputRadio;
