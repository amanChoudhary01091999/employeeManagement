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
                                <p className="mb-0">Communication Address :</p>
                            </div>
                            <div className="col">
                                <TextAreaInput
                                    formState={props.formState}
                                    label={null}
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
                                <p className="mb-0">Postel Address :</p>
                            </div>
                            <div className="col">
                                <TextAreaInput
                                    formState={props.formState}
                                    label={null}
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
                                <p className="mb-0">Permanent Address :</p>
                            </div>
                            <div className="col">
                                <TextAreaInput
                                    className='col'
                                    formState={props.formState}
                                    label={null}
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