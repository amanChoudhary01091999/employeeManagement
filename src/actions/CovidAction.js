import {
    COVID_REQUEST,
    COVID_SUCCESS,
    COVID_FAIL,
    COVID_GET_ERROR,
    COVID_GET_REQUEST,
    COVID_GET_SUCCESS
} from "../constants/covidConstants";

export const COVIDRequest = (loginUserInfo, navigate) => {
    return {
        type: COVID_REQUEST,
        payload: loginUserInfo,
        navigate: navigate,
    };
};

export const COVIDSuccess = (loginUserInfo) => {
    return {
        type: COVID_SUCCESS,
        payload: loginUserInfo,
    };
};

export const COVIDFail = (message) => {
    return {
        type: COVID_FAIL,
        payload: message,
    };
};

export const COVIDGetRequest=()=>
{
    return{
        type:COVID_GET_REQUEST
    }
}

export const COVIDGetSuccess=(userInfo)=>
{
    return{
        type:COVID_GET_SUCCESS,
        payload:userInfo
    }
}

export const COVIDGetError=(message)=>
{
    return{
        type:COVID_GET_ERROR,
        payload:message
    }
}