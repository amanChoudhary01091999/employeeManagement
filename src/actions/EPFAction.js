import { EPF_REQUEST, EPF_SUCESS, EPF_FAIL } from "../constants/EPFConstant";

export const requestEPF = (object) => {
    return {
        type: EPF_REQUEST,
        payload: object,
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
