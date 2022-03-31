import React from 'react'
import DatePicker from '../../InputFiles/DatePicker'
import Validation from '../../validation/Validations'


function GFAcknowledgement(props) {

    const validation = Validation().validationDegree
    return (
        <div>
            <h6 className="text-center mt-5 mb-3">Acknowledgement by the Employee</h6>
            <p className="text-center">Received the duplicate copy of nomination in Form 'F' filed by me and duly certified by the employer.</p>
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
        </div>
    )
}

export default GFAcknowledgement