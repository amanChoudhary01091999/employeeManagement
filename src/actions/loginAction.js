import {
    HR_LOGIN_REQUEST,
    HR_LOGIN_SUCCESS,
    HR_LOGIN_FAIL,
} from "../constants/loginConstant";

export const loginRequest = (userInfo, navigate) => {
    return {
        type: HR_LOGIN_REQUEST,
        payload: userInfo,
        navigate: navigate,
    };
};

export const loginSuccess = (userInfo) => {
    return {
        type: HR_LOGIN_SUCCESS,
        payload: userInfo,
    };
};

export const loginFail = (message) => {
    return {
        type: HR_LOGIN_FAIL,
        payload: message,
    };
};
