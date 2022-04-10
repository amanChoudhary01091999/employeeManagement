import { BGV_REQUEST, BGV_SUCCESS, BGV_FAIL,BGV_GET_SUCCESS,BGV_GET_REQUEST,BGV_GET_ERROR } from "../constants/bgvConstants";

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


export const BGVGetRequest=()=>
{
    return{
        type:BGV_GET_REQUEST
    }
}

export const BGVGetSuccess=(userInfo)=>
{
    return{
        type:BGV_GET_SUCCESS,
        payload:userInfo
    }
}

export const BGVGetError=(message)=>
{
    return{
        type:BGV_GET_ERROR,
        payload:message
    }
}
