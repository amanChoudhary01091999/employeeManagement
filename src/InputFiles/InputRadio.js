import React from 'react'

function InputRadio(props) {

    const { formState, label, name, validation } = props
    const { register, formState: { errors } } = formState
    return ( 
        <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                value={label}
                {...register(`${name}`, validation)}
            />
            <label class="form-check-label" htmlFor="male">{label}</label>
        </div>
    )
}

export default InputRadio