import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { Alert, Button, MenuItem, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../Input/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "../../actions/login.action";
import Snackbars from "../../components/Snackbar";
import Validation from "../../validation/Validations";

const currencies = [
    {
        value: "admin",
        label: "HR",
    },
    {
        value: "adminm",
        label: "Moderator",
    },
];
const validation = Validation().validationDegree;
const validationEmail = Validation().validationEmail;
function LoginForm() {
    const formState = useForm();
    const navigate = useNavigate();
    const [currency, setCurrency] = React.useState("admin");
    const accessToken = localStorage.getItem("accessToken");

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = formState;

    const loginState = useSelector((state) => state.loginReducer);
    const { loading, error, userInfo } = loginState;
    const dispatch = useDispatch();
    const OnSubmit = (data) => {
        const LoginApiObj = {
            role: ["admin"],
            email: data.user_name,
            password: data.password,
        };
        dispatch(loginRequest(LoginApiObj, navigate));
    };

    return (
        <Stack
            direction={"column"}
            spacing={3}
            padding={3}
            component="form"
            onSubmit={handleSubmit(OnSubmit)}
        >
            <img
                style={{ height: 40, alignSelf: "center" }}
                src="https://www.ndhgo.com/wp-content/uploads/2021/05/NDHGO-Logo-2021-01-1024x339.png"
                alt=""
            ></img>
            <TextInput
                formState={formState}
                label={"email"}
                id={"user_name"}
                validation={validationEmail}
            />

            <TextField
                id="role"
                select
                label="Select Role"
                value={currency}
                onChange={handleChange}
                error={errors["role"] !== undefined}
                helperText={errors["role"]?.message}
                {...register("role", {
                    required: {
                        value: true,
                        message: "this feild is required",
                    },
                })}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextInput
                formState={formState}
                label={"Password"}
                id={"password"}
                validation={validation}
            />

            <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                loading={loading}
            >
                <strong>Log In</strong>
            </LoadingButton>
        </Stack>
    );
}

export default LoginForm;
