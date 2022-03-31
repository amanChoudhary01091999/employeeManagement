import React from 'react'

import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'
import DatePicker from '../../InputFiles/DatePicker'


function GFFormNomination(props) {

    const validation = Validation().validationDegree

    return (
        <div>
            <div className="text-center">
                <h4 className="mb-0">FORM 'F'</h4>
                <p >See sub-rule (1) of Rule 6</p>
                <h6>Nomination</h6>
            </div>

            <ol className='list-group'>
                <label>To,<br /></label>
                <li>
                    <div >
                        <TextAreaInput
                            formState={props.formState}
                            name={"nomination_details"}
                            label={'(Give here name or description of the establishment with full address)'}
                            validation={validation}
                        />

                    </div>
                    <div className="mt-3">
                        <TextAreaInput
                            formState={props.formState}
                            name={"name_of_the_member"}
                            label={'I, Shri/Shrimati/Kumari'}
                            validation={validation}
                            placeholder={""}
                        />

                        <p className="mb-0 mt-2">whose particulars are given in the statement below, hereby nominate the person(s) mentioned below to receive the gratuity payable after my death as also the gratuity standing to my credit in the event of my death before that amount has become payable, or having become payable has not been paid and direct that the said amount of gratuity shall be paid in proportion indicated against the name(s) of the nominee(s).</p>
                    </div>
                </li>
                <li className="mt-3">
                    <p className="mb-0">I hereby certify that the person(s) mentioned is/are a member(s) of my family within the meaning of clause (h) of Section 2 of the Payment of Gratuity Act, 1972.</p>
                </li>
                <li className="mt-3">
                    <p className="mb-0">I hereby declare that I have no family within the meaning of clause (h) of Section 2 of the said Act.</p>
                </li>
                <li className="mt-3">
                    <p className="mb-1">(a) My father/mother/parents is/are not dependent on me.</p>
                    <p className="mb-0">(b) My husband's father/mother/parents is/are not dependent on my husband.</p>
                </li>
                <li className="mt-3">
                    <div className="row">
                        <div className="col-6">
                            <p className="mb-0">I have excluded my husband from my family by a notice dated the : </p>
                        </div>
                        <div className="col-6">
                            <TextAreaInput
                                formState={props.formState}
                                name={'excluded_husband'}
                                label={''}
                                validation={validation}
                                placeholder={""}
                            />
                        </div>
                        <div className="col-12">
                            <p className="mb-0 mt-2">to the controlling authority in terms of the proviso to clause (h) of Section 2 of the said Act.</p>
                        </div>
                    </div>
                </li>
                <li className="mt-3">
                    <p className="mb-0">Nomination made herein invalidates my previous nomination.</p>
                </li>
            </ol>
        </div>
    )
}

export default GFFormNomination