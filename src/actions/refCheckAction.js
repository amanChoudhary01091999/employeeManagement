import {
    RCAF_REQUEST, 
    RCAF_SUCCESS,
    RCAF_FAIL,
    RCAF_GET_ERROR,
    RCAF_GET_REQUEST,
    RCAF_GET_SUCCESS
} from "../constants/refCheckConstants";

export const RCAFRequest = (loginUserInfo, navigate) => {
    return {
        type: RCAF_REQUEST,
        payload: loginUserInfo,
        navigate: navigate,
    };
};

export const RCAFSuccess = (loginUserInfo) => {
    return {
        type: RCAF_SUCCESS,
        payload: loginUserInfo,
    };
};

export const RCAFFail = (message) => {
    return {
        type: RCAF_FAIL,
        payload: message,
    };
};



export const RCAFGetRequest=()=>
{
    return{
        type:RCAF_GET_REQUEST
    }
}

export const RCAFGetSuccess=(userInfo)=>
{
    return{
        type:RCAF_GET_SUCCESS,
        payload:userInfo
    }
}

export const RCAFGetError=(message)=>
{
    return{
        type:RCAF_GET_ERROR,
        payload:message
    }
}