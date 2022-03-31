import React from 'react'
import Validation from '../validation/Validations'

import InputRadio from './InputRadio'

function InputRadioGroup(props) {

    const { formState: { errors } } = props.formState
    const validation = Validation().validationDegree
    const radiogroups = props.label
    const name  = props.name
    const labelGroup = props.labelGroup

    return (
        <div>
            {labelGroup ? <label class="mr-4 font-weight-bold">{labelGroup}</label> : null}
            {radiogroups.map((radioItems) =>
                <InputRadio
                    formState={props.formState}
                    label={radioItems}
                    name={name}
                    validation={validation}
                />
            )}
            <div className="text-danger" ><small>{errors[name]?.message}</small></div>
        </div>
    )
}
export default InputRadioGroup