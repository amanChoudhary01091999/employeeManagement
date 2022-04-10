import React from 'react'
import DatePicker from '../../InputFiles/DatePicker'
import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'

function RCAFPart1(props) {

    const validationAddress = Validation().validationAddress

    return (
        <table className="table table-bordered align-middle mt-4">
            <tbody>
                <tr>
                    <td  >
                        <div className="row align-center">
                            <div className="col-3 align-self-center">
                                <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginTop:"30px",marginRight:"10px"}}>Communication Address :</p>
                            </div>
                            <div className="col">
                                <TextAreaInput
                                    formState={props.formState}
                                    label={"Address"}
                                    name={"communication_address"}
                                    validation={validationAddress} />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td  >
                        <div className="row align-center">
                            <div className="col-3 align-self-center">
                                <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginTop:"30px",marginRight:"10px"}}>Postel Address :</p>
                            </div>
                            <div className="col">
                                <TextAreaInput
                                    formState={props.formState}
                                    label={"Postel Address"}
                                    name={"postel_address"}
                                    validation={validationAddress} />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td  >
                        <div className="row align-center">
                            <div className="col-3 align-self-center">
                                <p style={{ fontFamily: "Muller",fontSize:"20px",textAlign:"left",marginTop:"30px",marginRight:"10px"}}>Permanent Address :</p>
                            </div>
                            <div className="col">
                                <TextAreaInput
                                    className='col'
                                    formState={props.formState}
                                    label={"Permanent Address"}
                                    name={"permanent_Address"}
                                    validation={validationAddress} />
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default RCAFPart1