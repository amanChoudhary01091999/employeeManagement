import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { Alert, Button, MenuItem, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../Input/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "../../actions/loginAction";
import Snackbars from "../../components/Snackbar";

function LoginForm() {
    const formState = useForm();
    const history = useNavigate();
    const [currency, setCurrency] = React.useState("admin");
    const accessToken = localStorage.getItem("accessToken");
    // useEffect(() => {
    //     if (accessToken !== null) history("/dashboard", { replace: true });
    // });
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = formState;

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

    const loginState = useSelector((state) => state.loginReducer);
    const { loading, error, userInfo } = loginState;
    const dispatch = useDispatch();
    console.log(loginState);

    const OnSubmit = (data) => {
        const LoginApiObj = {
            role: ["admin"],
            user_name: data.user_name,
            password: data.password,
        };
        dispatch(loginRequest(LoginApiObj));
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
                label={"username"}
                id={"user_name"}
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
            />

            <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                loading={loading}
            >
                <strong>Log In</strong>
            </LoadingButton>
            {error && (
                <Snackbars value={true} severity={"error"} message={error} />
            )}
            {userInfo && (
                <Snackbars
                    value={true}
                    severity={"success"}
                    message={"Login Success"}
                />
            )}
        </Stack>
    );
}

export default LoginForm;
