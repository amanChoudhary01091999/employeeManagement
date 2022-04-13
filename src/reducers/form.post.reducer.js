import {
    BGV_POST_REQUEST,
    BGV_POST_SUCCESS,
    BGV_POST_FAIL,
    COC_POST_REQUEST,
    COC_POST_SUCCESS,
    COC_POST_FAIL,
    COVID_POST_REQUEST,
    COVID_POST_SUCCESS,
    COVID_POST_FAIL,
    EPF_POST_REQUEST,
    EPF_POST_SUCESS,
    EPF_POST_FAIL,
    GF_POST_REQUEST,
    GF_POST_SUCCESS,
    GF_POST_FAIL,
    RCAF_POST_REQUEST,
    RCAF_POST_SUCCESS,
    RCAF_POST_FAIL,
} from "../constants/form.post.constants";

export const BGVReducer = (state = {}, action) => {
    switch (action.type) {
        case BGV_POST_REQUEST:
            return { loading: true };
        case BGV_POST_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case BGV_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const CoCReducer = (state = {}, action) => {
    switch (action.type) {
        case COC_POST_REQUEST:
            return { loading: true };
        case COC_POST_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case COC_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const COVIDReducer = (state = {}, action) => {
    switch (action.type) {
        case COVID_POST_REQUEST:
            return { loading: true };
        case COVID_POST_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case COVID_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const reducerEPF = (state = {}, action) => {
    switch (action.type) {
        case EPF_POST_REQUEST:
            return { loading: true };
        case EPF_POST_SUCESS:
            return { loading: false, userInfo: action.payload };
        case EPF_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const GFFormReducer = (state = {}, action) => {
    switch (action.type) {
        case GF_POST_REQUEST:
            return { loading: true };
        case GF_POST_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case GF_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const RCAFReducer = (state = {}, action) => {
    switch (action.type) {
        case RCAF_POST_REQUEST:
            return { loading: true };
        case RCAF_POST_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case RCAF_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
