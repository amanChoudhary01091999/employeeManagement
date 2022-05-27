import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Stack } from "@mui/material";
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
    padding: 40,
    height: "100vh",
    //margin: "20px auto",
    alignItems: "center",
};

const textfieldStyle = {
    width: "100%",
    align: "center",
};

function UserLogin() {
    const formState = useForm();
    const dispatch = useDispatch();
    const naviagte = useNavigate();

    const userloginState = useSelector((state) => state.userAuthReducer);
    const { handleSubmit } = formState;
    const { loading } = userloginState;
    const validation = Validation().validationDegree;

    const OnSubmit = (data) => {
        const id = parseInt(GetUserId(window.location.href));
        const LoginApiObj = {
            id: id,
            role: ["user"],
            password: data.token,
        };
        dispatch(UserLoginRequest(LoginApiObj, naviagte));
    };

    return (
        <div>
            {/* <LoginAppBar /> */}
            <div>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        xl={7}
                        style={{ backgroundColor: "#1976d2" }}
                    ></Grid>
                    <Grid item xs={12} xl={5} md={5}>
                        <Paper elevation={2} style={paperStyle}>
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
                                    label={"Enter your password"}
                                    id={"token"}
                                    validation={validation}
                                    icon={<Key fontSize="small" />}
                                />

                                <LoadingButton
                                    type="submit"
                                    disableElevation
                                    variant="contained"
                                    size="large"
                                    loading={loading}
                                >
                                    <strong>Log In</strong>
                                </LoadingButton>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default UserLogin;
