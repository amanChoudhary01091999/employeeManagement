import { DateTimePicker, DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
//'2014-08-18T21:11:54'

function DatePicker(props) {
    const { formState,name, validation, type,defaultValue,label } = props;

    const {
        register,
        formState: { errors },
    } = formState;
    //console.log({defaultValue});
    const [value, setValue] = React.useState('');
    React.useEffect(()=>{
        if(defaultValue)
            setValue(defaultValue);
    },[defaultValue])
    return (
        <div>
            <div>
               
                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                <DesktopDatePicker
                label={label}
                id={name}
               inputFormat="yyyy-MM-dd"
                mask="____-__-__"
               value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
                renderInput={(params)=><TextField{...params}{...register(name, validation)}error={errors[name] !== undefined}
                helperText={errors[name]?.message}/>}

                />
                </LocalizationProvider>

            </div>
        </div>
    );
}

export default DatePicker;
