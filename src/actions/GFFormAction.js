import {
    GFForm_REQUEST,
    GFForm_SUCCESS,
    GFForm_FAIL,
} from "../constants/GFFormConstants";

export const GFFormRequest = (loginUserInfo, nav) => {
    return {
        type: GFForm_REQUEST,
        payload: loginUserInfo,
        navigate: nav,
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
