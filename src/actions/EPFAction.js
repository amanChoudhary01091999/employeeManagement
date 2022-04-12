import { EPF_REQUEST, EPF_SUCESS, EPF_FAIL,EPF_GET_ERROR,EPF_GET_REQUEST,EPF_GET_SUCCESS } from "../constants/EPFConstant";

export const requestEPF = (object, navigate) => {
    return {
        type: EPF_REQUEST,
        payload: object,
        navigate: navigate,
    };
};

export const sucessEPF = (object) => {
    return {
        type: EPF_SUCESS,
        payload: object,
    };
};

export const failEPF = (message) => {
    return {
        type: EPF_FAIL,
        payload: message,
    };
};


export const EPFGetRequest=()=>
{
    return{
        type:EPF_GET_REQUEST 
    }
}

export const EPFGetSuccess=(userInfo)=>
{
    return{
        type:EPF_GET_SUCCESS,
        payload:userInfo
    }
}

export const EPFGetError=(message)=>
{
    return{
        type:EPF_GET_ERROR,
        payload:message
    }
}

