import {
    USER_GET_REQUEST,
    USER_GET_SUCCESS,
    USER_GET_FAIL,
    USER_POST_REQUEST,
    USER_POST_SUCCESS,
    USER_POST_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    OPEN_DIALOG,
    CLOSE_DIALOG,
} from "../constants/userConstant";

export const dialogReducer = (state = { open: false }, action) => {
    switch (action.type) {
        case OPEN_DIALOG:
            return { open: true, user: action.payload };
        case CLOSE_DIALOG:
            return { open: false };
        default:
            return state;
    }
};

export const userGetReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_GET_REQUEST:
            return { ...state, loading: true };
        case USER_GET_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case USER_GET_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userPostReducer = (
    state = {
        loading: false,
        userInfo: null,
        error: null,
    },
    action
) => {
    switch (action.type) {
        case USER_POST_REQUEST:
            return { ...state, loading: true };
        case USER_POST_SUCCESS:
            // console.log(state.userInfo);
            // const value = state.userInfo;
            // value.splice(0, 0, action.payload);
            // console.log(value);
            return { ...state, loading: false, userInfo: action.payload };
        case USER_POST_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };
        case USER_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userDeleteReducer = (
    state = {
        loading: false,
        userInfo: null,
        error: null,
    },
    action
) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return { ...state, loading: true };
        case USER_DELETE_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case USER_DELETE_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
