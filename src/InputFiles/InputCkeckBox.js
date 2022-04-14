import { CheckBox } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

function InputCkeckBox(props) {
    const { formState, label, name, validation, defaultValue } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <div class="form-check">
            <FormControlLabel
                control={
                    <Checkbox
                        value={label}
                        id={label}
                        defaultChecked={defaultValue}
                        {...register(`${name}`, validation)}
                    />
                }
                label={label}
            />
        </div>
    );
}

export default InputCkeckBox;
