import React from 'react'

import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'
import DatePicker from '../../InputFiles/DatePicker'


function GFFormNominee(props) {

    const validation = Validation().validationDegree
    return (
        <div>
            <h6 className="text-center mt-4">Nominee(s)</h6>
            <table className="table table-bordered align-middle mt-4">
                <thead>
                    <th className="text-center">Sl.No.</th>
                    <th className="text-center">Name in full with full address of nominee(s)</th>
                    <th className="text-center">Relationship with the employee</th>
                    <th className="text-center">DOB of nominee</th>
                    <th className="text-center">Proportion by which the gratuity will be shared</th>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td className="text-center">(1)</td>
                        <td className="text-center">(2)</td>
                        <td className="text-center">(3)</td>
                        <td className="text-center">(4)</td>
                    </tr>
                    <tr>
                        <td className='text-center'>1.</td>
                        <td><TextAreaInput
                            formState={props.formState}
                            name={'nominee_full_name_and_address'}
                            label={null}
                            validation={validation}
                            placeholder={""} /></td>
                        <td><TextAreaInput
                            formState={props.formState}
                            name={'relationship_with_nominee'}
                            label={null}
                            validation={validation}
                            placeholder={""} /></td>
                        <td><TextAreaInput
                            formState={props.formState}
                            name={'dob_of_nominee'}
                            label={null}
                            validation={validation}
                            placeholder={""} /></td>
                        <td><TextAreaInput
                            formState={props.formState}
                            name={'shared_proportion'}
                            label={null}
                            validation={validation}
                            placeholder={""}
                        /></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default GFFormNominee