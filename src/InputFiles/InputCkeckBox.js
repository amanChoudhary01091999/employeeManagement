import React from 'react'

function InputCkeckBox(props) {

    const { formState , label, name, validation } = props
    const { register, formState: { errors } } = formState
    return (
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value={label}
                name={name}
                id={label}
                {...register(`${name}`, validation)} />
            <label class="form-check-label" htmlFor={label}>{label}</label>

        </div>
    )
}

export default InputCkeckBox