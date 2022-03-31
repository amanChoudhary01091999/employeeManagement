import {
    CoC_REQUEST,
    CoC_SUCCESS,
    CoC_FAIL,
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
 