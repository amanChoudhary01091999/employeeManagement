import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import {
    Alert,
    Button,
    Grid,
    MenuItem,
    Paper,
    Stack,
    TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/Input/TextInput";
import { useSelector, useDispatch } from "react-redux";
import LoginAppBar from "../HRLoginScreen/LoginAppBar";
import { UserLoginRequest } from "../../actions/user.auth.action";
import GetUserId from "../../validation/getUserId";
import { Key } from "@mui/icons-material";
import Validation from "../../validation/Validations";

const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "30%",
    margin: "20px auto",
    alignItems: "center",
};

const textfieldStyle = {
    margin: " 10px auto",
    width: "100%",
    align: "center",
};

function UserLogin() {
    const formState = useForm();
    const naviagte = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = formState;

    const userloginState = useSelector((state) => state.userAuthReducer);
    const { loading, error, userInfo } = userloginState;
    const dispatch = useDispatch();

    const validation = Validation().validationDegree;

    const OnSubmit = (data) => {
        const LoginApiObj = {
            //id:GetUserId(window.location.href),
            id: 1,
            password: data.token,
        };
        dispatch(UserLoginRequest(LoginApiObj, naviagte));
    };

    return (
        <div style={{ minWidth: "1000px" }}>
            <LoginAppBar />
            <div style={{ backgroundColor: "#F3F3F3", paddingBottom: "10px" }}>
                <Grid style={{ padding: "10px" }}>
                    <Paper elevation={5} style={paperStyle}>
                        <Stack
                            direction={"column"}
                            spacing={3}
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
                                label={"Enter your token"}
                                id={"token"}
                                validation={validation}
                                icon={<Key fontSize="small" />}
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
                    </Paper>
                </Grid>
            </div>
        </div>
    );
}

export default UserLogin;
