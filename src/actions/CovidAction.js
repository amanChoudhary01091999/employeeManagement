import {
    COVID_REQUEST,
    COVID_SUCCESS,
    COVID_FAIL,
} from "../constants/covidConstants";

export const COVIDRequest = (loginUserInfo, navigate) => {
    return {
        type: COVID_REQUEST,
        payload: loginUserInfo,
        navigate: navigate,
    };
};

export const COVIDSuccess = (loginUserInfo) => {
    return {
        type: COVID_SUCCESS,
        payload: loginUserInfo,
    };
};

export const COVIDFail = (message) => {
    return {
        type: COVID_FAIL,
        payload: message,
    };
};
