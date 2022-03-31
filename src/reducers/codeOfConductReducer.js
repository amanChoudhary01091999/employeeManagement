import {
    CoC_REQUEST,
    CoC_SUCCESS, 
    CoC_FAIL,
} from "../constants/codeOfConductConstants"; 

export const CoCReducer = (state = {}, action) => {
    switch (action.type) {
        case CoC_REQUEST:
            return { loading: true };
        case CoC_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case CoC_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
