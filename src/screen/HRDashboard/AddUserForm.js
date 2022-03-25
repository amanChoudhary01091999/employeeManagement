import React, { useState } from "react";
import { Alert, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import TextInput from "../../Input/TextInput";
import { userPostRequest } from "../../actions/userAction";

function AddUserForm() {
    const formState = useForm();
    const dispatch = useDispatch();
    const { loading, error, userInfo } = useSelector(
        (state) => state.userPostReducer
    );
    const { handleSubmit } = formState;
    function onClick(data) {
        dispatch(userPostRequest(data));
    }
    const OnSubmit = (data) => onClick(data);
    return (
        <Stack
            direction={"column"}
            spacing={3}
            padding={3}
            width={400}
            component="form"
            onSubmit={handleSubmit(OnSubmit)}
        >
            <img
                style={{ height: 40, alignSelf: "center" }}
                src="https://www.ndhgo.com/wp-content/uploads/2021/05/NDHGO-Logo-2021-01-1024x339.png"
                alt=""
            ></img>
            <TextInput formState={formState} label={"Email-id"} id={"email"} />
            <TextInput formState={formState} label={"Name"} id={"name"} />
            <TextInput
                formState={formState}
                label={"PhoneNo"}
                id={"phoneNumber"}
            />

            <LoadingButton
                type="submit"
                size="large"
                loading={loading}
                variant="outlined"
            >
                submit
            </LoadingButton>
            {error && <Alert severity="error">{error}</Alert>}
            {userInfo && <Alert severity="success">Sucess</Alert>}
        </Stack>
    );
}

export default AddUserForm;
