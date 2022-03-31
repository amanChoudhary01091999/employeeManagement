import { BGV_REQUEST, BGV_SUCCESS, BGV_FAIL } from "../constants/bgvConstants";

export const BGVRequest = (loginUserInfo, navigate) => {
    return {
        type: BGV_REQUEST,
        payload: loginUserInfo,
        navigate: navigate,
    };
};

export const BGVSuccess = (loginUserInfo) => {
    return {
        type: BGV_SUCCESS,
        payload: loginUserInfo,
    };
};

export const BGVFail = (message) => {
    return {
        type: BGV_FAIL,
        payload: message,
    };
};
