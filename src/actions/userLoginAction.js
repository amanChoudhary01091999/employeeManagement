import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
} from "../constants/userLoginConstant";

export const UserLoginRequest = (loginUserInfo) => {
    return {
        type: USER_LOGIN_REQUEST,
        payload: loginUserInfo,
    };
};

export const UserLoginSuccess = (loginUserInfo) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: loginUserInfo,
    };
};

export const UserLoginFail = (message) => {
    return {
        type: USER_LOGIN_FAIL,
        payload: message,
    };
};
