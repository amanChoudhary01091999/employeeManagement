import { TextField } from '@mui/material'
import React from 'react'

function InputForm(props) {

    const { formState, label, name, validation } = props
    const { register,  formState: { errors } } = formState
    return ( 
  
           
            <TextField
                label={label}
                type="text"
                id={name}
                //variant="outlined"
                {...register(`${name}`, validation)}
                error={errors[name] !== undefined}
                helperText={errors[name]?.message}

            />
           
          
    )
}
export default InputForm




// import { TextField } from "@mui/material";
// import React from "react";

// function TextInput(props) {
//     const { label, id, formState } = props;
//     const {
//         register,
//         formState: { errors },
//     } = formState;
//     return (
//         <TextField
//             label={label}
//             id={id}
//             variant="outlined"
//             error={errors[id] !== undefined}
//             helperText={errors[id]?.message}
//             {...register(id, {
//                 required: {
//                     value: true,
//                     message: "this feild is required",
//                 },
//             })}
//         />
//     );
// }

// export default TextInput;