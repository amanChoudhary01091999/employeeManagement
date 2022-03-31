import { Box } from '@mui/material'
import React from 'react'
import DatePicker from '../../InputFiles/DatePicker'
import Validation from '../../validation/Validations'


function GFAcknowledgement(props) { 

    const validation = Validation().validationDegree
    return (
        <div>
            <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center'}}>Acknowledgement by the Employee</Box>
            {/* <h6 className="text-center mt-5 mb-3"></h6> */}
            <h5 style={{fontFamily: 'Muller',textAlign:"center"}}>Received the duplicate copy of nomination in Form 'F' filed by me and duly certified by the employer.</h5>
            <div className="row">
                <div className="col-6">
                    <DatePicker
                        formState={props.formState}
                        name={'acknowledgement_date'}
                        label={"Date"}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />
                </div>
                <div className="col-6">
                    <DatePicker
                        formState={props.formState}
                        name={'signature_of_the_employee'}
                        label={"Signature of the Employee"}
                        type={'file'}
                        validation={validation}
                        placeholder={""} />
                </div>
            </div>
            <br/>
            <hr/>
        </div>
    )
}

export default GFAcknowledgement