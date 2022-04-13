import {
    BGV_GET_REQUEST,
    BGV_GET_SUCCESS,
    BGV_GET_FAIL,
    COC_GET_REQUEST,
    COC_GET_SUCCESS,
    COC_GET_FAIL,
    COVID_GET_REQUEST,
    COVID_GET_SUCCESS,
    COVID_GET_FAIL,
    EPF_GET_REQUEST,
    EPF_GET_SUCCESS,
    EPF_GET_FAIL,
    GF_GET_REQUEST,
    GF_GET_SUCCESS,
    GF_GET_FAIL,
    RCAF_GET_REQUEST,
    RCAF_GET_SUCCESS,
    RCAF_GET_FAIL,
} from "../constants/form.get.constants";

export const BGVGetReducer = (
    state = {
        loadingBGV: false,
        userInfoBGV: null,
        errorBGV: null,
    },
    action
) => {
    switch (action.type) {
        case BGV_GET_REQUEST:
            return { ...state, loadingBGV: true };
        case BGV_GET_SUCCESS:
            return { ...state, loadingBGV: false, userInfoBGV: action.payload };
        case BGV_GET_FAIL:
            return { ...state, errorBGV: action.payload, loadingBGV: false };
        default:
            return state;
    }
};

export const cocGetReducer = (
    state = {
        loadingCOC: false,
        userInfoCOC: null,
        errorCOC: null,
    },
    action
) => {
    switch (action.type) {
        case COC_GET_REQUEST:
            return { ...state, loadingCOC: true };
        case COC_GET_SUCCESS:
            return { ...state, loadingCOC: false, userInfoCOC: action.payload };
        case COC_GET_FAIL:
            return { ...state, loadingCOC: false, errorCOC: action.payload };
        default:
            return state;
    }
};

export const COVIDGetReducer = (
    state = {
        loadingCOVID: false,
        userInfoCOVID: {},
        errorCOVID: null,
    },
    action
) => {
    switch (action.type) {
        case COVID_GET_REQUEST:
            return { ...state, loadingCOVID: true };
        case COVID_GET_SUCCESS:
            return {
                ...state,
                loadingCOVID: false,
                userInfoCOVID: action.payload,
            };
        case COVID_GET_FAIL:
            return {
                ...state,
                errorCOVID: action.payload,
                loadingCOVID: false,
            };
        default:
            return state;
    }
};

export const EPFGetReducer = (
    state = {
        loadingEPF: false,
        userInfoEPF: null,
        errorEPF: null,
    },
    action
) => {
    switch (action.type) {
        case EPF_GET_REQUEST:
            return { ...state, loadingEPF: true };
        case EPF_GET_SUCCESS:
            return {
                ...state,
                loadingEPF: false,
                userInfoEPF: action.payload,
            };
        case EPF_GET_FAIL:
            return {
                ...state,
                errorEPF: action.payload,
                loadingEPF: false,
            };
        default:
            return state;
    }
};

export const GFGetReducer = (
    state = {
        loadingGF: false,
        userInfoGF: {},
        errorGF: null,
    },
    action
) => {
    switch (action.type) {
        case GF_GET_REQUEST:
            return { ...state, loadingGF: true };
        case GF_GET_SUCCESS:
            return {
                ...state,
                loadingGF: false,
                userInfoGF: action.payload,
            };
        case GF_GET_FAIL:
            return {
                ...state,
                errorGF: action.payload,
                loadingGF: false,
            };
        default:
            return state;
    }
};

export const RCAFGetReducer = (
    state = {
        loadingRCAF: false,
        userInfoRCAF: {},
        errorRCAF: null,
    },
    action
) => {
    switch (action.type) {
        case RCAF_GET_REQUEST:
            return { ...state, loadingRCAF: true };
        case RCAF_GET_SUCCESS:
            return {
                ...state,
                loadingRCAF: false,
                userInfoRCAF: action.payload,
            };
        case RCAF_GET_FAIL:
            return {
                ...state,
                errorRCAF: action.payload,
                loadingRCAF: false,
            };
        default:
            return state;
    }
};
