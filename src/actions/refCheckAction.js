import {
    RCAF_REQUEST,
    RCAF_SUCCESS,
    RCAF_FAIL,
} from "../constants/refCheckConstants";

export const RCAFRequest = (loginUserInfo, navigate) => {
    return {
        type: RCAF_REQUEST,
        payload: loginUserInfo,
        navigate: navigate,
    };
};

export const RCAFSuccess = (loginUserInfo) => {
    return {
        type: RCAF_SUCCESS,
        payload: loginUserInfo,
    };
};

export const RCAFFail = (message) => {
    return {
        type: RCAF_FAIL,
        payload: message,
    };
};
