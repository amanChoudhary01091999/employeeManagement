import { EPF_REQUEST, EPF_SUCESS, EPF_FAIL } from "../constants/EPFConstant";

export const reducerEPF = (state = {}, action) => {
    switch (action.type) {
        case EPF_REQUEST:
            return { loading: true };
        case EPF_SUCESS:
            return { loading: false, userInfo: action.payload };
        case EPF_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
