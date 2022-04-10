import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

function InputRadio(props) {
    const { formState, label, name, validation,defaultValue, defaultChecked} = props;
    const {
        register,
        formState: { errors },
    } = formState;

    const [value,setValue]=React.useState(defaultChecked)
    console.log("I am",defaultChecked)
//     React.useEffect(()=>{

//         if(defaultChecked)
//         setValue(defaultChecked);
// },[defaultChecked])
    
  

  
    return (
        <div className="form-check form-check-inline">
            <FormControlLabel
                
                checked={defaultChecked} 
                control={<Radio checked={defaultChecked} size="small" color="success" />}
                label={label}
                value={label}
               
             

               
                {...register(`${name}`, validation)}
                
            />
        </div>
    );
}

export default InputRadio;
