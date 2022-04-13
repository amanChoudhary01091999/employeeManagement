import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

function InputRadio(props) {
    const { formState, label, name, validation } = props;
    const { register } = formState;

    return (
        <div className="form-check form-check-inline">
            <FormControlLabel
                control={<Radio size="small" color="success" />}
                label={label}
                value={label}
                {...register(`${name}`, validation)}
            />
        </div>
    );
}

export default InputRadio;
