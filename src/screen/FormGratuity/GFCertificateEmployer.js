import React from 'react'
import DatePicker from '../../InputFiles/DatePicker'
import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'


function GFCertificateEmployer(props) {

    const validation = Validation().validationDegree

    return (
        <div>
            <h6 className="text-center mt-5 mb-3">Certificate by the Employer</h6>
            <p className="text-center">Certified that the particulars of the above nomination have been verified and recorded in this establishment.</p>
            <div className="row">
                <div className="col-6">
                    <TextAreaInput
                        formState={props.formState}
                        name={'employer_reference_no'}
                        label={"Employer's Reference No"}
                        validation={validation}
                        placeholder={""} />
                </div>
                <div className="col-6">
                    <DatePicker
                        formState={props.formState}
                        name={'signature_of_the_employer'}
                        type={'file'}
                        label={"Signature of the employer/Officer authorised Designation"}
                        validation={validation}
                        placeholder={""} />
                </div>
                <div className="col-6 mt-3">
                    <DatePicker
                        formState={props.formState}
                        name={'certificate_date'}
                        label={"Date"}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />
                </div>
                <div className="col-6 mt-3">
                    <div>
                        <TextAreaInput
                            formState={props.formState}
                            name={'name_of_the_establishment'}
                            label={"Name of the establishment"}
                            validation={validation}
                            placeholder={""} />
                    </div>
                    <div >
                        <TextAreaInput
                            formState={props.formState}
                            name={'address_of_the_establishment'}
                            label={"Address of the establishment"}
                            validation={validation}
                            placeholder={""} />
                    </div>
                    <div>
                        <DatePicker
                            formState={props.formState}
                            name={'rubberStamp'}
                            type={'file'}
                            label={"rubber_stamp_there_of"}
                            validation={validation}
                            placeholder={""} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GFCertificateEmployer