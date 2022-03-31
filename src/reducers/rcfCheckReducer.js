import {
    RCAF_REQUEST,
    RCAF_SUCCESS, 
    RCAF_FAIL,
} from "../constants/refCheckConstants"; 

export const RCAFReducer = (state = {}, action) => {
    switch (action.type) {
        case RCAF_REQUEST:
            return { loading: true };
        case RCAF_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case RCAF_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
