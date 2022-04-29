import { CheckBox } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import React from "react";

function InputCkeckBox(props) {
    const { formState, label, name, validation, defaultValue } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <div className="form-check">
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
            <FormHelperText error={true}>
                {errors[name]?.message}
            </FormHelperText>
        </div>
    );
}

export default InputCkeckBox;
