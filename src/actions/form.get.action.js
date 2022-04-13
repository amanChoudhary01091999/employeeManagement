import {
    BGV_GET_REQUEST,
    BGV_GET_SUCCESS,
    BGV_GET_FAIL,
    COC_GET_REQUEST,
    COC_GET_SUCCESS,
    COC_GET_FAIL,
    COVID_GET_REQUEST,
    COVID_GET_SUCCESS,
    COVID_GET_FAIL,
    EPF_GET_REQUEST,
    EPF_GET_SUCCESS,
    EPF_GET_FAIL,
    GF_GET_REQUEST,
    GF_GET_SUCCESS,
    GF_GET_FAIL,
    RCAF_GET_REQUEST,
    RCAF_GET_SUCCESS,
    RCAF_GET_FAIL,
} from "../constants/form.get.constants";

export const BGVGetRequest = () => ({
    type: BGV_GET_REQUEST,
});
export const BGVGetSuccess = (userInfo) => ({
    type: BGV_GET_SUCCESS,
    payload: userInfo,
});
export const BGVGetError = (message) => ({
    type: BGV_GET_FAIL,
    payload: message,
});

export const COCGetRequest = () => ({
    type: COC_GET_REQUEST,
});
export const COCGetSuccess = (userInfo) => ({
    type: COC_GET_SUCCESS,
    payload: userInfo,
});
export const COCGetFail = (message) => ({
    type: COC_GET_FAIL,
    payload: message,
});

export const COVIDGetRequest = () => ({
    type: COVID_GET_REQUEST,
});
export const COVIDGetSuccess = (userInfo) => ({
    type: COVID_GET_SUCCESS,
    payload: userInfo,
});
export const COVIDGetError = (message) => ({
    type: COVID_GET_FAIL,
    payload: message,
});

export const EPFGetRequest = () => ({
    type: EPF_GET_REQUEST,
});
export const EPFGetSuccess = (userInfo) => ({
    type: EPF_GET_SUCCESS,
    payload: userInfo,
});
export const EPFGetError = (message) => ({
    type: EPF_GET_FAIL,
    payload: message,
});

export const GFGetRequest = () => ({
    type: GF_GET_REQUEST,
});
export const GFGetSuccess = (userInfo) => ({
    type: GF_GET_SUCCESS,
    payload: userInfo,
});
export const GFGetError = (message) => ({
    type: GF_GET_FAIL,
    payload: message,
});

export const RCAFGetRequest = () => ({
    type: RCAF_GET_REQUEST,
});
export const RCAFGetSuccess = (userInfo) => ({
    type: RCAF_GET_SUCCESS,
    payload: userInfo,
});
export const RCAFGetError = (message) => ({
    type: RCAF_GET_FAIL,
    payload: message,
});
