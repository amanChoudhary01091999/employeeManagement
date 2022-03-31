import React from 'react'

import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'
import DatePicker from '../../InputFiles/DatePicker'


function GFFormDeclaration(props) {

    const validation = Validation().validationDegree
    return (
        <div>
            <h6 className="text-center mt-5 mb-3">Declaration by Witnesses</h6>
            <p className="text-center">Nomination signed/thumb-impressed before me</p>
            <div className="row">
                <div className="col-6">
                    <TextAreaInput
                        formState={props.formState}
                        name={'name_of_witnesses'}
                        label={"Name of witnesses"}
                        validation={validation}
                        placeholder={""} />

                </div>
                <div className="col-6">
                    <DatePicker
                        formState={props.formState}
                        name={'signature_of_witnesses'}
                        label={"Signature of witnesses"}
                        type={'file'}
                        validation={validation}
                        placeholder={""} />

                </div>
                <div className="col-12 mt-3">
                    <TextAreaInput
                        rows="3"
                        formState={props.formState}
                        name={'address_of_witnesses'}
                        label={"Address of witnesses"}
                        validation={validation}
                        placeholder={""} />

                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <TextAreaInput
                        formState={props.formState}
                        name={'witnesses_place'}
                        label={"Place"}
                        validation={validation}
                        placeholder={""} />

                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <DatePicker
                        formState={props.formState}
                        name={'witnesses_date'}
                        label={"Date"}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />

                </div>
            </div>
        </div>
    )
}

export default GFFormDeclaration