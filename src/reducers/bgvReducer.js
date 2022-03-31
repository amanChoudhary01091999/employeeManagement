import {
    BGV_REQUEST,
    BGV_SUCCESS, 
    BGV_FAIL,
} from "../constants/bgvConstants"; 

export const BGVReducer = (state = {}, action) => {
    switch (action.type) {
        case BGV_REQUEST:
            return { loading: true };
        case BGV_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case BGV_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
