import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Controller } from "react-hook-form";

function DatePicker(props) {
    const { formState, name, validation, defaultValue, label } = props;
    const {
        formState: { errors },
        control,
    } = formState;
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
                control={control}
                name={name}
                defaultValue={defaultValue ? defaultValue : ""}
                rules={validation}
                render={({ field: { onChange, value } }) => (
                    <DesktopDatePicker
                        label={"date"}
                        id={name}
                        inputFormat="yyyy-MM-dd"
                        mask="____-__-__"
                        value={value}
                        onChange={(e) => onChange(e)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                size="small"
                                id={name}
                                error={errors[name] !== undefined}
                                helperText={errors[name]?.message}
                            />
                        )}
                    />
                )}
            />
        </LocalizationProvider>
    );
}

export default DatePicker;
