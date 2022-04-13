import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

function DatePicker(props) {
    const { formState, name, validation, defaultValue, label } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    const [value, setValue] = useState(new Date());
    React.useEffect(() => {
        if (defaultValue) setValue(defaultValue);
    }, [defaultValue]);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label={"date"}
                id={name}
                inputFormat="yyyy-MM-dd"
                mask="____-__-__"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        {...register(name, validation)}
                        error={errors[name] !== undefined}
                        helperText={errors[name]?.message}
                    />
                )}
            />
        </LocalizationProvider>
    );
}

export default DatePicker;
