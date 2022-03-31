import {
    COVID_REQUEST,
    COVID_SUCCESS, 
    COVID_FAIL,
} from "../constants/covidConstants"; 

export const COVIDReducer = (state = {}, action) => {
    switch (action.type) {
        case COVID_REQUEST:
            return { loading: true };
        case COVID_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case COVID_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
