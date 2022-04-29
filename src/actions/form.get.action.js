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

export const BGVGetRequest = (id) => ({
    type: BGV_GET_REQUEST,
    payload: id,
});
export const BGVGetSuccess = (userInfo) => ({
    type: BGV_GET_SUCCESS,
    payload: userInfo,
});
export const BGVGetError = (message) => ({
    type: BGV_GET_FAIL,
    payload: message,
});

export const COCGetRequest = (id) => ({
    type: COC_GET_REQUEST,
    payload: id,
});
export const COCGetSuccess = (userInfo) => ({
    type: COC_GET_SUCCESS,
    payload: userInfo,
});
export const COCGetFail = (message) => ({
    type: COC_GET_FAIL,
    payload: message,
});

export const COVIDGetRequest = (id) => ({
    type: COVID_GET_REQUEST,
    payload: id,
});
export const COVIDGetSuccess = (userInfo) => ({
    type: COVID_GET_SUCCESS,
    payload: userInfo,
});
export const COVIDGetError = (message) => ({
    type: COVID_GET_FAIL,
    payload: message,
});

export const EPFGetRequest = (id) => ({
    type: EPF_GET_REQUEST,
    payload: id,
});
export const EPFGetSuccess = (userInfo) => ({
    type: EPF_GET_SUCCESS,
    payload: userInfo,
});
export const EPFGetError = (message) => ({
    type: EPF_GET_FAIL,
    payload: message,
});

export const GFGetRequest = (id) => ({
    type: GF_GET_REQUEST,
    payload: id,
});
export const GFGetSuccess = (userInfo) => ({
    type: GF_GET_SUCCESS,
    payload: userInfo,
});
export const GFGetError = (message) => ({
    type: GF_GET_FAIL,
    payload: message,
});

export const RCAFGetRequest = (id) => ({
    type: RCAF_GET_REQUEST,
    payload: id,
});
export const RCAFGetSuccess = (userInfo) => ({
    type: RCAF_GET_SUCCESS,
    payload: userInfo,
});
export const RCAFGetError = (message) => ({
    type: RCAF_GET_FAIL,
    payload: message,
});
