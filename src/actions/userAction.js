import {
    USER_GET_REQUEST,
    USER_GET_SUCCESS,
    USER_GET_FAIL,
    USER_POST_REQUEST,
    USER_POST_SUCCESS,
    USER_POST_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    OPEN_DIALOG,
    CLOSE_DIALOG,
} from "../constants/userConstant";

export const userGetRequest = (userInfo) => {
    return {
        type: USER_GET_REQUEST,
        payload: userInfo,
    };
};

export const userGetSuccess = (userInfo) => {
    return {
        type: USER_GET_SUCCESS,
        payload: userInfo,
    };
};

export const userGetFail = (message) => {
    return {
        type: USER_GET_FAIL,
        payload: message,
    };
};

export const userPostRequest = (userInfo) => {
    return {
        type: USER_POST_REQUEST,
        payload: userInfo,
    };
};

export const userPostSuccess = (userInfo) => {
    return {
        type: USER_POST_SUCCESS,
        payload: userInfo,
    };
};

export const userPostFail = (message) => {
    return {
        type: USER_POST_FAIL,
        payload: message,
    };
};

export const userUpdateRequest = (userInfo) => {
    return {
        type: USER_UPDATE_REQUEST,
        payload: userInfo,
    };
};

export const userUpdateSuccess = (userInfo) => {
    return {
        type: USER_UPDATE_SUCCESS,
        payload: userInfo,
    };
};

export const userUpdateFail = (message) => {
    return {
        type: USER_UPDATE_FAIL,
        payload: message,
    };
};

export const userDeleteRequest = (userInfo) => {
    return {
        type: USER_DELETE_REQUEST,
        payload: userInfo,
    };
};

export const userDeleteSuccess = (userInfo) => {
    return {
        type: USER_DELETE_SUCCESS,
        payload: userInfo,
    };
};

export const userDeleteFail = (message) => {
    return {
        type: USER_DELETE_FAIL,
        payload: message,
    };
};

export const openDialog = () => {
    return {
        type: OPEN_DIALOG,
    };
};

export const closeDialog = () => {
    return {
        type: CLOSE_DIALOG,
    };
};
