import {
    GFForm_REQUEST,
    GFForm_SUCCESS,
    GFForm_FAIL,
    GF_GET_ERROR,
    GF_GET_REQUEST,
    GF_GET_SUCCESS
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


export const GFGetRequest=()=>
{
    return{
        type:GF_GET_REQUEST
    }
}

export const GFGetSuccess=(userInfo)=>
{
    return{
        type:GF_GET_SUCCESS,
        payload:userInfo
    }
}

export const GFGetError=(message)=>
{
    return{
        type:GF_GET_ERROR,
        payload:message
    }
}