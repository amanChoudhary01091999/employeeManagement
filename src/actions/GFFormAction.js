import {
    GFForm_REQUEST,
    GFForm_SUCCESS,
    GFForm_FAIL,
} from "../constants/GFFormConstants";

export const GFFormRequest = (loginUserInfo) => {
    return {
        type: GFForm_REQUEST,
        payload: loginUserInfo,
    };
};

export const GFFormSuccess = (loginUserInfo) => {
    return {
        type: GFForm_SUCCESS,
        payload: loginUserInfo,
    };
};

export const GFFormFail = (message) => {
    return {
        type: GFForm_FAIL,
        payload: message,
    };
};
