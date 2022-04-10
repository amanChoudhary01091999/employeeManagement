import {
    CoC_REQUEST,
    CoC_SUCCESS,
    CoC_FAIL,
    COC_GET_REQUEST,
    COC_GET_FAIL,COC_GET_SUCCESS
} from "../constants/codeOfConductConstants";

export const CoCRequest = (loginUserInfo) => {
    return {
        type: CoC_REQUEST,
        payload: loginUserInfo,
    };
};

export const CoCSuccess = (loginUserInfo) => {
    return {
        type: CoC_SUCCESS,
        payload: loginUserInfo,
    };
};

export const CoCFail = (message) => {
    return {
        type: CoC_FAIL,
        payload: message,
    };
};
 


export const cocGetRequest = () => {
    return {
        type: COC_GET_REQUEST,
    };
};

export const cocGetSuccess = (userInfo) => {
    return {
        type: COC_GET_SUCCESS,
        payload: userInfo,
    };
};

export const cocGetFail = (message) => {
    return {
        type: COC_GET_FAIL,
        payload: message,
    };
};
