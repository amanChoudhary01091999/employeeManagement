import React from "react";

function Validation() {
    const validation = {
        validationAddress: {
            required: {
                value: true,
                message: "this field is required",
            },
            minLength: {
                value: 3,
                message: "min",
            },
        },
        validationDegree: {
            required: {
                value: true,
                message: "this field is required",
            },
        },
        validationTextInput: {
            required: {
                value: true,
                message: "this field is required",
            },
            minLength: {
                value: 3,
                message: "Min length is 3",
            },
            maxLength: {
                value: 100,
                message: "Max length is 100",
            },
        },
        validationAreaInput: {
            required: {
                value: true,
                message: "this field is required",
            },
            minLength: {
                value: 3,
                message: "Min length is 3",
            },
            maxLength: {
                value: 300,
                message: "Max length is 300",
            },
        },
        validationPhone: {
            required: {
                value: true,
                message: "this field is required",
            },
            pattern: {
                value: new RegExp(/^[0-9\b]+$/),
                message: "phone No is Not Valid",
            },
            minLength: {
                value: 10,
                message: "phone No is Not Valid",
            },
            maxLength: {
                value: 10,
                message: "phone No is Not Valid",
            },
        },
        validationEmail: {
            required: {
                value: true,
                message: "this field is required",
            },
            pattern: {
                value: new RegExp(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ),
                message: "Email is not valid", 
            },
        },
        validationDrivingLicence: {
            pattern: {
                value: new RegExp(
                    /^(([A-Z]{2}[0-9]{2})()|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/),
                message: "Please enter valid licence number",
            },
        },
        validationPassport: {
            pattern: {

                value: new RegExp("^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$"),
                message: "Please enter valid passport number ",
            },
        },
        validationLandline: {
            minLength: {
                value: 8,
                message: "Landline No is Not Valid",
            },
            maxLength: {
                value: 8,
                message: "Landline No is Not Valid",
            },
            pattern: {
                value: new RegExp(/^[0-9\b]+$/),
                message: "Landline No is Not Valid",
            },
        },
    };
    return validation;
}

export default Validation;
