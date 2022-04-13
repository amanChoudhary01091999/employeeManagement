import {
    BGV_POST_REQUEST,
    BGV_POST_SUCCESS,
    BGV_POST_FAIL,
    COC_POST_REQUEST,
    COC_POST_SUCCESS,
    COC_POST_FAIL,
    COVID_POST_REQUEST,
    COVID_POST_SUCCESS,
    COVID_POST_FAIL,
    EPF_POST_REQUEST,
    EPF_POST_SUCESS,
    EPF_POST_FAIL,
    GF_POST_REQUEST,
    GF_POST_SUCCESS,
    GF_POST_FAIL,
    RCAF_POST_REQUEST,
    RCAF_POST_SUCCESS,
    RCAF_POST_FAIL,
} from "../constants/form.post.constants";

export const BGVPostRequest = (loginUserInfo, navigate) => ({
    type: BGV_POST_REQUEST,
    payload: loginUserInfo,
    navigate: navigate,
});
export const BGVPostSuccess = (loginUserInfo) => ({
    type: BGV_POST_SUCCESS,
    payload: loginUserInfo,
});
export const BGVPostFail = (message) => ({
    type: BGV_POST_FAIL,
    payload: message,
});

export const COCPostRequest = (loginUserInfo) => ({
    type: COC_POST_REQUEST,
    payload: loginUserInfo,
});
export const COCPostSuccess = (loginUserInfo) => ({
    type: COC_POST_SUCCESS,
    payload: loginUserInfo,
});
export const COCPostFail = (message) => ({
    type: COC_POST_FAIL,
    payload: message,
});

export const COVIDPostRequest = (loginUserInfo, navigate) => ({
    type: COVID_POST_REQUEST,
    payload: loginUserInfo,
    navigate: navigate,
});
export const COVIDPostSuccess = (loginUserInfo) => ({
    type: COVID_POST_SUCCESS,
    payload: loginUserInfo,
});
export const COVIDPostFail = (message) => ({
    type: COVID_POST_FAIL,
    payload: message,
});

export const EPFPostRequest = (object, navigate) => ({
    type: EPF_POST_REQUEST,
    payload: object,
    navigate: navigate,
});
export const EPFPostSuccess = (object) => ({
    type: EPF_POST_SUCESS,
    payload: object,
});
export const EPFPostFail = (message) => ({
    type: EPF_POST_FAIL,
    payload: message,
});

export const GFPostRequest = (loginUserInfo, navigate) => ({
    type: GF_POST_REQUEST,
    payload: loginUserInfo,
    navigate: navigate,
});
export const GFPostSuccess = (loginUserInfo) => ({
    type: GF_POST_SUCCESS,
    payload: loginUserInfo,
});
export const GFPostFail = (message) => ({
    type: GF_POST_FAIL,
    payload: message,
});

export const RCAFPostRequest = (loginUserInfo, navigate) => ({
    type: RCAF_POST_REQUEST,
    payload: loginUserInfo,
    navigate: navigate,
});
export const RCAFPostSuccess = (loginUserInfo) => ({
    type: RCAF_POST_SUCCESS,
    payload: loginUserInfo,
});
export const RCAFPostFail = (message) => ({
    type: RCAF_POST_FAIL,
    payload: message,
});
