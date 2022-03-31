



import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Grid, MenuItem, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../Input/TextInput";
import { useSelector, useDispatch } from "react-redux";
import Snackbars from "../../components/Snackbar";
import LoginAppBar from "../HRLoginScreen/LoginAppBar";



import LoginUserReducer from "../../reducers/loginUserReducer"
import { UserLoginRequest } from "../../actions/userLoginAction";
import GetUserId from "../../validation/getUserId";



const paperStyle =
{
    padding: 20,
    height: '70vh',
    width: "30%",
    margin: "20px auto",
    alignItems: "center",
    

}

const textfieldStyle =
{
    margin: " 10px auto",
    width:"100%",
    align: "center"
}

function UserLogin() {
    const formState = useForm();
    const history = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = formState;

    const userloginState = useSelector((state) => state.LoginUserReducer);
    const { loading, error, userInfo } = userloginState;
    const dispatch = useDispatch();
    

    const OnSubmit = (data) => {
        const LoginApiObj = {
            //id:GetUserId(window.location.href),
            id:1,
            password: data.token,
            };
        dispatch(UserLoginRequest(LoginApiObj))

    };

    return (
        <>
                 <LoginAppBar/>
         <div style={{ backgroundColor: "#F3F3F3", paddingBottom: "10px" }}>
         
        <Grid style={{padding:"10px"}}>
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
        </Paper>
        </Grid>
        </div>
        </>
    );
}

export default UserLogin;
