import React from 'react'
import DatePicker from '../../InputFiles/DatePicker'
import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'
import InputRadioGroup from "../../InputFiles/InputRadioGroup";

function RCAFPart2(props) {

    const validationAddress = Validation().validationAddress
    const validationDegree = Validation().validationDegree
    const { formState: { errors } } = props.formState
    const number = props.number
    const formState = props.formState
    return (
        <div>
            <hr className='my-5'></hr>
            <h4 style={{ backgroundColor: 'aliceblue' }} className='mb-4 p-3'>#Education Degree {number}</h4>

            <table className="table table-bordered align-middle mt-4">
                <tbody>
                    <tr>
                        {/* <td className="text-center" scope="row">1</td> */}
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p className="mb-0">Degree Earned ({number}):</p>
                                </div>
                                <div className="col-9">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`degree_earned_${number}`}
                                        validation={validationDegree} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Institute Name ({number}):</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`institute_name_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">University Name ({number}):</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`university_name_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p className="mb-0">Institute Address & Contact Number ({number}):</p>
                                </div>
                                <div className="col-9">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`institute_address_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="row align-center">
                                <div className="col-3 align-self-center">
                                    <p className="mb-0">University Address ({number}):</p>
                                </div>
                                <div className="col-9">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`university_address_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">From (month / year) ({number}):</p>
                                </div>
                                <div className="col">
                                    <DatePicker
                                        formState={props.formState}
                                        label={null}
                                        type={'date'}
                                        name={`degree_period_to_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">To (month / year) ({number}):</p>
                                </div>
                                <div className="col">
                                    <DatePicker
                                        formState={props.formState}
                                        label={null}
                                        type={'date'}
                                        name={`degree_period_from_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Graduated ({number})  :</p>
                                </div>
                                <div className="col">
                                    <InputRadioGroup
                                        formState={props.formState}
                                        name={`graduated_${number}`}
                                        labelGroup={''}
                                        label={['Yes', 'No', 'Pursuing']}
                                    />
                                </div>
                            </div>
                        </td>
                        <td >
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Programm ({number}) : </p>
                                </div>
                                <div className="col">
                                    <InputRadioGroup
                                        formState={props.formState}
                                        name={`programm_${number}`}
                                        labelGroup={''}
                                        label={['Full Time', 'Part Time']}
                                    />

                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Type Of Degree ({number}) :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`type_of_degree_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Graduation date (month / year) ({number}) :</p>
                                </div>
                                <div className="col">
                                    <DatePicker
                                        formState={props.formState}
                                        label={null}
                                        type={'date'}
                                        name={`graduation_date_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Major Subject ({number}) :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`major_subject_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Roll No ({number}) :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`roll_no_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Enrolment No ({number}) :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`enrolment_no_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Hall Ticket No ({number}) :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`hall_ticket_no_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="row align-center">
                                <div className="col-auto align-self-center">
                                    <p className="mb-0">Registration No({number}) :</p>
                                </div>
                                <div className="col">
                                    <TextAreaInput
                                        formState={props.formState}
                                        label={null}
                                        name={`registration_no_${number}`}
                                        validation={validationAddress} />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RCAFPart2