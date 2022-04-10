
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import "./buttonStyle.css"

function FilePicker(props) {
    const[value,setValue]=useState(null)
    const inputRef=useRef()

    function focus()
    {
        inputRef.current.focus()
    }

    function getFile() {
        document.getElementById("upfile").click();
      }

      function sub(obj) {
        var file = obj.value;
        var fileName = file.split("\\");
        document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
       // document.myForm.submit();
        //event.preventDefault();
      }
      

    const { formState, name, validation, type,defaultValue,label } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    //const [value, setValue] = React.useState('');
  
    // React.useEffect(()=>{
    //     if(defaultValue)
    //         setValue(defaultValue);
    // },[defaultValue])
    
    return (
        <div>
            <div>
                {/* <TextField
                    type={type}
                    value={'c:/passwords.txt'}

                    id={name}
                    variant="filled"
                    //defaultValue={defaultValue?defaultValue:""}
                    size="small"
                    fullWidth
                    {...register(`${name}`, validation)}
                    error={errors[name] !== undefined}
                    helperText={errors[name]?.message}
                /> */}
             <label style={{border: "1px solid #ccc",
    display: "inline-block",
    padding: "6px 12px",
    cursor: "pointer",
    alignContent:"center"}} >

{/* <div id="yourBtn" className="yourBtn" onClick={()=>getFile}>click to upload a file</div> */}
  
   <TextField
   ref={inputRef}
   type={"file"}
   id={name}
   variant="filled"
   //onClick={document.getElementById("yourBtn").innerHTML=value}
   //onChange={sub(this)}
   
   //value="upload"

   //onChange={(e)=>setValue(e.target.files[0])}
   //size="small"
   //fullWidth
   {...register(`${name}`, validation)}
   error={errors[name] !== undefined}
   helperText={errors[name]?.message}
//    style={{display:"none"}}
   //style={{width:"500px"}}
  ></TextField>
  {defaultValue!==undefined?
  <>
   <p style={{align:"left",fontFamily:"muller"}}><Box sx={{
                                        bgcolor: "#cfe8fc",
                                        height: "30",
                                        fontSize: "20",
                                        fontFamily: "Muller",
                                        textAlign: "center"}}>Previous File Chosen:</Box>{defaultValue?defaultValue:""}</p>
                                        {/* <p>{defaultValue.files[0].mozFullPath}</p> */}
                                        </> 
                                        :null}
    
   


    
    </label>
    {/* <Button onClick={focus}>Focus</Button> */}
    {/* <button onClick={()=>this.fileInput.click()}>Pick file</button> */}




            </div>
        </div>
    );
}

export default FilePicker;
