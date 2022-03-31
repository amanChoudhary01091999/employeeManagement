import React from 'react'


import InputRadioGroup from '../../InputFiles/InputRadioGroup'

import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'
import DatePicker from '../../InputFiles/DatePicker'


function GFFormStatement(props) {

    const validation = Validation().validationDegree

    return (
        <div>
            <h6 className="text-center mt-5 mb-3">Statement</h6>
            <ol className="list-group">
                <li>
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p className="mb-0">Name of employee in full:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'employee_full_name'}
                                label={null}
                                validation={validation}
                                placeholder={""} />
                        </div>
                    </div>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p className="mb-0">Sex:</p>
                        </div>
                        <div className="col-9">
                            <InputRadioGroup
                                formState={props.formState}
                                name={"gender"}
                                labelGroup={null}
                                label={['Male', 'Female', 'Other']}
                            />
                        </div>
                    </div>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p className="mb-0">Religion:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'religion'}
                                label={null}
                                validation={validation}
                                placeholder={""} />
                        </div>
                    </div>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p className="mb-0">Marital Status:</p>
                        </div>
                        <div className="col-9">
                            <InputRadioGroup
                                formState={props.formState}
                                name={"marital_status"}
                                labelGroup={null}
                                label={['Married', 'Unmarried', 'Widow', 'Widower', 'Divorcee']}
                            />
                        </div>
                    </div>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p className="mb-0">Department/Branch/Section where employed:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'department'}
                                label={null}
                                validation={validation}
                                placeholder={""} />

                        </div>
                    </div>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p className="mb-0">Post held with Ticket No. or Serial No:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'ticket_no'}
                                label={null}
                                validation={validation}
                                placeholder={""} />

                        </div>
                    </div>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p className="mb-0">Date of appointment:</p>
                        </div>
                        <div className="col-9">
                            <DatePicker
                                formState={props.formState}
                                name={'date_of_appointment'}
                                label={null}
                                type={'date'}
                                validation={validation}
                                placeholder={""} />

                        </div>
                    </div>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p className="mb-0">Permanent address:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'permanent_address'}
                                label={null}
                                validation={validation}
                                placeholder={""} />
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3 mt-3">
                            <div className="row">
                                <div className="col-4 align-self-center">
                                    <p className="mb-0 text-end">Village:</p>
                                </div>
                                <div className="col-8">
                                    <TextAreaInput
                                        formState={props.formState}
                                        name={'village'}
                                        label={null}
                                        validation={validation}
                                        placeholder={""} />

                                </div>
                            </div>
                        </div>
                        <div className="col-3 mt-3">
                            <div className="row">
                                <div className="col-4 align-self-center">
                                    <p className="mb-0 text-end">Thana:</p>
                                </div>
                                <div className="col-8">
                                    <TextAreaInput
                                        formState={props.formState}
                                        name={'thana'}
                                        label={null}
                                        validation={validation}
                                        placeholder={""} />
                                </div>
                            </div>
                        </div>
                        <div className="col-3 mt-3">
                            <div className="row">
                                <div className="col-4 align-self-center">
                                    <p className="mb-0 text-end">Sub-division:</p>
                                </div>
                                <div className="col-8">
                                    <TextAreaInput
                                        formState={props.formState}
                                        name={'sub_division'}
                                        label={null}
                                        validation={validation}
                                        placeholder={""} />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
            <div>
                <TextAreaInput
                    formState={props.formState}
                    name={'place'}
                    label={"Place"}
                    validation={validation}
                    placeholder={""} />

            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <DatePicker
                        formState={props.formState}
                        name={'statement_date'}
                        label={"statementDate"}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />

                </div>
                <div className="col-6">
                    <DatePicker
                        formState={props.formState}
                        name={'employee_signature'}
                        type={'file'}
                        label={"Signature/Thumb-impression of the Employee"}
                        validation={validation}
                        placeholder={""} />
                </div>
            </div>
        </div>
    )
}

export default GFFormStatement