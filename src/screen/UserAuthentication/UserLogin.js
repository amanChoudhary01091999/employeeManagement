import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/Input/TextInput";
import { useSelector, useDispatch } from "react-redux";
import LoginAppBar from "../HRLoginScreen/LoginAppBar";
import { UserLoginRequest } from "../../actions/user.auth.action";
import GetUserId from "../../validation/getUserId";
import { Key, Lock, Password } from "@mui/icons-material";
import Validation from "../../validation/Validations";
import { bgcolor } from "@mui/system";

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
        <Grid container>
            <Grid
                item
                xs={12}
                md={7}
                xl={7}
                display={{ xs: "none", md: "flex" }}
                alignItems={"center"}
                justifyContent={"center"}
                style={{ backgroundColor: "#1976d2" }}
            >
                <img
                    //style={{ backgroundColor: "black" }}
                    height={"60%"}
                    width={"60%"}
                    // src="https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?w=740&t=st=1653660609~exp=1653661209~hmac=5219dd0252a2af681087d5864af636a2cd8466e354b896b3f9027069a420a4a2"

                    src="https://www.ndhgo.com/wp-content/uploads/2022/04/img-hero-girl.webp"
                ></img>
            </Grid>
            <Grid
                item
                xs={12}
                xl={5}
                md={5}
                sx={{
                    bgcolor: "#F3F3F3",
                    padding: 4,
                    minHeight: "100vh",
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        padding: 4,
                        borderRadius: 3,
                    }}
                >
                    <Stack
                        direction={"column"}
                        gap={5}
                        marginTop={3}
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
                            label={"Password"}
                            id={"token"}
                            type={"password"}
                            validation={validation}
                            icon={<Lock color="action" fontSize="small" />}
                        />

                        <LoadingButton
                            type="submit"
                            disableElevation
                            variant="contained"
                            sx={{
                                height: 50,
                            }}
                            loading={loading}
                        >
                            Log In
                        </LoadingButton>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default UserLogin;
