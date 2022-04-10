import { takeLatest, put, call } from "redux-saga/effects";
import { openToast } from "../actions/toast.action";
import getErrorMessage from "../util/ErrorHandle";
import {
    USER_GET_REQUEST,
    USER_POST_REQUEST,
    USER_UPDATE_REQUEST,
    USER_DELETE_REQUEST,
} from "../constants/userConstant";
import {
    userGetSuccess,
    userGetFail,
    userPostSuccess,
    userPostFail,
    userUpdateSuccess,
    userUpdateFail,
    userDeleteSuccess,
    userDeleteFail,
    closeDialog,
} from "../actions/userAction";
import {
    passwordGenerator,
    userGetData,
    userPostData,
    userUpdateData,
    userDeleteData,
} from "../Api/userRequest";

function* uesrGetAsync() {
    try {
        const { data } = yield call(userGetData);
        yield put(userGetSuccess(data));
        yield put(openToast("Fetch Sucessful", "success"));
    } catch (error) {
        yield put(userGetFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* uesrPostAsync(action) {
    try {
        const password = yield call(passwordGenerator);
        action.payload.token = password.data.token;
        console.log(password.data.token);
        const { data } = yield call(userPostData, action.payload);
        yield put(userPostSuccess(data));
        yield put(closeDialog());
    } catch (error) {
        yield put(userPostFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* uesrUpdateAsync(action) {
    try {
        const { data } = yield call(userUpdateData, action.payload);
        yield put(userUpdateSuccess(data));
        yield put(closeDialog());
    } catch (error) {
        yield put(userUpdateFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* uesrDeleteAsync(action) {
    try {
        const { data } = yield call(userDeleteData, action.payload);
        yield put(userDeleteSuccess(action.payload));
    } catch (error) {
        yield put(userDeleteFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}
export function* userGetSaga() {
    yield takeLatest(USER_GET_REQUEST, uesrGetAsync);
}

export function* userPostSaga() {
    yield takeLatest(USER_POST_REQUEST, uesrPostAsync);
}

export function* userUpdateSaga() {
    yield takeLatest(USER_UPDATE_REQUEST, uesrUpdateAsync);
}

export function* userDeleteSaga() {
    yield takeLatest(USER_DELETE_REQUEST, uesrDeleteAsync);
}
