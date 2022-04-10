import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextField } from '@mui/material';

 
function TextAreaInput(props) { 

    const { formState, label, name, validation,defaultValue } = props
    const { register, formState: { errors } } = formState
    return ( 
        <div className="form-group">
            
            <TextField
            //hiddenLabel
            label={defaultValue!==null?label:""}
            type="text"
            variant='filled'
            id={name}
            multiline
            fullWidth
            defaultValue={defaultValue?defaultValue:""}
            //variant="outlined"
            {...register(`${name}`, validation)}
            error={errors[name] !== undefined}
            helperText={errors[name]?.message}/>
            

        </div>
    )
}

export default TextAreaInput



{/* <TextField
                label={label}
                type="text"
                id={name}
                variant="outlined"
                {...register(`${name}`, validation)}
                error={errors[name] !== undefined}
                helperText={errors[name]?.message}

            /> */}