import {
    GFForm_REQUEST,
    GFForm_SUCCESS, 
    GFForm_FAIL,
} from "../constants/GFFormConstants"; 

export const GFFormReducer = (state = {}, action) => {
    switch (action.type) {
        case GFForm_REQUEST:
            return { loading: true };
        case GFForm_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case GFForm_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
