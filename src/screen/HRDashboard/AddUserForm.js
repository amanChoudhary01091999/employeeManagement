import React from "react";
import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import TextInput from "../../components/Input/TextInput";
import { userPostRequest, userUpdateRequest } from "../../actions/user.action";
import Validation from "../../validation/Validations";
import { AlternateEmail, Person, Phone } from "@mui/icons-material";

const emailValidation = Validation().validationEmail;
const nameValidation = Validation().validationName;
const phoneValidation = Validation().validationPhone;

function AddUserForm(props) {
    const formState = useForm();
    const dispatch = useDispatch();
    let user = { name: "", email: "", mobileNo: "" };
    const { update } = props;
    const { loading } = useSelector((state) => state.userPostReducer);
    const updateReducer = useSelector((state) => state.userUpdateReducer);
    const updateLoading = updateReducer.loading;

    if (update !== undefined) {
        user = update;
    }
    const { handleSubmit } = formState;

    function onUpdateClick(data) {
        const obj = {
            id: update.id,
            name: data.name,
            email: data.email,
            mobileNo: data.phoneNumber,
        };
        dispatch(userUpdateRequest(obj));
    }
    function addUserClick(data) {
        const addUsersApiObj = {
            name: data.name,
            email: data.email,
            role: ["user"],
            token: "",
            mobile_no: data.phoneNumber,
        };
        dispatch(userPostRequest(addUsersApiObj));
    }

    const OnSubmit = (data) => {
        if (update === undefined) addUserClick(data);
        else onUpdateClick(data);
    };
    return (
        <Stack
            direction={"column"}
            spacing={3}
            padding={1}
            marginTop={2}
            width={400}
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
                value={user.email}
                label={"Email-id"}
                disabled={false}
                id={"email"}
                validation={emailValidation}
                icon={<AlternateEmail fontSize="small" />}
            />
            <TextInput
                formState={formState}
                value={user.name}
                label={"Name"}
                id={"name"}
                validation={nameValidation}
                icon={<Person fontSize="small" />}
            />
            <TextInput
                formState={formState}
                label={"PhoneNo"}
                id={"phoneNumber"}
                value={user.mobileNo}
                validation={phoneValidation}
                icon={<Phone fontSize="small" />}
            />

            <LoadingButton
                type="submit"
                size="large"
                loading={update ? updateLoading : loading}
                variant="contained"
            >
                <Typography
                    fontFamily={"Rubik"}
                    fontWeight={"bold"}
                    letterSpacing={2}
                >
                    {update ? "Update" : "Add User"}
                </Typography>
            </LoadingButton>
        </Stack>
    );
}

export default AddUserForm;
