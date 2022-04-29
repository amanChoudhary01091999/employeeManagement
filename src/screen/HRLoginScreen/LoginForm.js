import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/Input/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "../../actions/login.action";
import Validation from "../../validation/Validations";
import { AlternateEmail, LockRounded } from "@mui/icons-material";

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
    const [currency, setCurrency] = useState("admin");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = formState;
    const loginState = useSelector((state) => state.loginReducer);
    const { loading } = loginState;
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
                icon={<AlternateEmail fontSize="small" />}
            />
            <TextField
                id="role"
                select
                label="Select Role"
                value={currency}
                onChange={handleChange}
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
                type={"password"}
                validation={validation}
                icon={<LockRounded fontSize="small" />}
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
