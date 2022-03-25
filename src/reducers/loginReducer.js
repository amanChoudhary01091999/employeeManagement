import {
    HR_LOGIN_REQUEST,
    HR_LOGIN_SUCCESS,
    HR_LOGIN_FAIL,
} from "../constants/loginConstant";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case HR_LOGIN_REQUEST:
            return { loading: true };
        case HR_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case HR_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
