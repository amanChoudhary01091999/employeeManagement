import React from 'react'


import InputRadioGroup from '../../InputFiles/InputRadioGroup'

import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'
import DatePicker from '../../InputFiles/DatePicker'


function GFFormStatement(props) {

    const validation = Validation().validationDegree

    return (
        <div>
            <h5 style={{fontFamily: 'Muller',textAlign:"center" }}>Statement</h5>
            <ol className="list-group">
                <li>
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p style={{fontFamily: 'Muller',textAlign:"center" }}>Name of employee in full:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'employee_full_name'}
                                label={'Full Name'}
                                validation={validation}
                                placeholder={""} />
                        </div>

                    </div>
                    <hr/>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p style={{fontFamily: 'Muller',textAlign:"center" }}>Sex:</p>
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
                    <hr/>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p style={{fontFamily: 'Muller',textAlign:"center" }}>Religion:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'religion'}
                                label={"Religion"}
                                validation={validation}
                                placeholder={""} />
                        </div>
                    </div>
                    <hr/>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p style={{fontFamily: 'Muller',textAlign:"center" }}>Marital Status:</p>
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
                    <hr/>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p style={{fontFamily: 'Muller',textAlign:"center" }}>Department/Branch/Section where employed:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'department'}
                                label={"Department"}
                                validation={validation}
                                placeholder={""} />

                        </div>
                    </div>
                    <hr/>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p style={{fontFamily: 'Muller',textAlign:"center" }}>Post held with Ticket No. or Serial No:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'ticket_no'}
                                label={"Ticket Number"}
                                validation={validation}
                                placeholder={""} />

                        </div>
                    </div>
                    <hr/>
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p style={{fontFamily: 'Muller',textAlign:"center" }}>Date of appointment:</p>
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
                    <hr/>
                    
                </li>
                <li className="mt-3">
                    <div className="row align-center">
                        <div className="col-3 align-self-center">
                            <p style={{fontFamily: 'Muller',textAlign:"center" }}>Permanent address:</p>
                        </div>
                        <div className="col-9">
                            <TextAreaInput
                                formState={props.formState}
                                name={'permanent_address'}
                                label={"Permanent Address"}
                                validation={validation}
                                placeholder={""} />
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3 mt-3">
                            <div className="row">
                                <div className="col-4 align-self-center">
                                    <p style={{fontFamily: 'Muller',textAlign:"center" }}>Village:</p>
                                </div>
                                <div className="col-8">
                                    <TextAreaInput
                                        formState={props.formState}
                                        name={'village'}
                                        label={'Village'}
                                        validation={validation}
                                        placeholder={""} />

                                </div>
                            </div>
                        </div>
                        
                        <div className="col-3 mt-3">
                            <div className="row">
                                <div className="col-4 align-self-center">
                                    <p style={{fontFamily: 'Muller',textAlign:"center" }}>Thana:</p>
                                </div>
                                <div className="col-8">
                                    <TextAreaInput
                                        formState={props.formState}
                                        name={'thana'}
                                        label={'Thana'}
                                        validation={validation}
                                        placeholder={""} />
                                </div>
                            </div>
                        </div>
                        <div className="col-3 mt-3">
                            <div className="row">
                                <div className="col-4 align-self-center">
                                    <p style={{fontFamily: 'Muller',textAlign:"center" }}>Sub-division:</p>
                                </div>
                                <div className="col-8">
                                    <TextAreaInput
                                        formState={props.formState}
                                        name={'sub_division'}
                                        label={'Sub Division'}
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
            
            <br/>
            <div className="row mt-3">
            <div className="">
                                    <p style={{fontFamily: 'Muller',textAlign:"left" }}>Statement Date:</p>
                                </div>
                <div className="col-6">
                    <DatePicker

                        formState={props.formState}
                        name={'statement_date'}
                        label={"statementDate"}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />

                </div>
                <div className="row mt-3">
                <div >
                                    <p style={{fontFamily: 'Muller',textAlign:"left" }}>Signature Of Employee</p>
                                </div>
                    <DatePicker
                        formState={props.formState}
                        name={'employee_signature'}
                        type={'file'}
                        label={"Signature/Thumb-impression of the Employee"}
                        validation={validation}
                        placeholder={""} />
                </div>
            </div>
            <hr/>
        </div>
        
    )
}

export default GFFormStatement