import React from 'react'

import TextAreaInput from '../../InputFiles/TextAreaInput'
import Validation from '../../validation/Validations'
import DatePicker from '../../InputFiles/DatePicker'
import { Box } from '@mui/system'


function GFFormNomination(props) {

    const validation = Validation().validationDegree

    return (
        <div>
            <div className="text-center">
            <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}><p style={{color:'black',fontWeight:'bold'}}> FORM-F<br/>
               See sub-rule (1) of Rule 6</p> 
               </Box><br/>
               
                <h3 style={{fontFamily: 'Muller',}}>Nomination</h3>
            </div>

            <ol className='list-group' style={{textAlign:"left"}}>
                <h5 style={{fontFamily: 'Muller',textAlign:"center" }}>To,<br /></h5>
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
                    <h5 style={{fontFamily: 'Muller' }}>I,Shri/Shiramti/Kumari</h5>
                        <TextAreaInput
                            formState={props.formState}
                            name={"name_of_the_member"}
                            label={'Nominee name'}
                            validation={validation}
                            placeholder={""}
                        />

                        <h5 className="mb-0 mt-2" style={{fontFamily: 'Muller',textAlign:"left",textSize:'4vh' }} >whose particulars are given in the statement below, hereby nominate the person(s) mentioned below to receive the gratuity payable after my death as also the gratuity standing to my credit in the event of my death before that amount has become payable, or having become payable has not been paid and direct that the said amount of gratuity shall be paid in proportion indicated against the name(s) of the nominee(s).</h5>
                    </div>
                </li>
                <hr/>
                <li className="mt-3">
                    <h5 style={{fontFamily: 'Muller' }}>I hereby certify that the person(s) mentioned is/are a member(s) of my family within the meaning of clause (h) of Section 2 of the Payment of Gratuity Act, 1972.</h5>
                </li>
                <hr/>
                <li className="mt-3">
                    <h5 style={{fontFamily: 'Muller' }}>I hereby declare that I have no family within the meaning of clause (h) of Section 2 of the said Act.</h5>
                </li>
                <hr/>
                <li className="mt-3">
                    <h5 style={{fontFamily: 'Muller' }}>(a) My father/mother/parents is/are not dependent on me.</h5>
                    <h5 style={{fontFamily: 'Muller' }}>(b) My husband's father/mother/parents is/are not dependent on my husband.</h5>
                </li>
                <hr/>
                <li className="mt-3">
                    <div className="row">
                        <div className="col-6">
                            <h5 style={{fontFamily: 'Muller' }}>I have excluded my husband from my family by a notice dated the : </h5>
                        </div>
                        <div className="col-6">
                            <DatePicker

                                type={"date"}
                                formState={props.formState}
                                name={'excluded_husband'}
                                label={''}
                                validation={validation}
                                placeholder={""}
                            />
                        </div>
                        
                        <div className="col-12">
                            <h5 style={{fontFamily: 'Muller' }}>to the controlling authority in terms of the proviso to clause (h) of Section 2 of the said Act.</h5>
                        </div>
                        <hr/>
                    </div>
                </li>
                <li className="mt-3">
                    <h5 style={{fontFamily: 'Muller' }}>Nomination made herein invalidates my previous nomination.</h5>
                </li>
                <hr/>
            </ol>
        </div>
    )
}

export default GFFormNomination