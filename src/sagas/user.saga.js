import { takeLatest, put, call } from "redux-saga/effects";
import { openToast } from "../actions/toast.action";
import getErrorMessage from "../util/ErrorHandle";
import {
    USER_GET_REQUEST,
    USER_POST_REQUEST,
    USER_UPDATE_REQUEST,
    USER_DELETE_REQUEST,
} from "../constants/user.constant";
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
} from "../actions/user.action";
import {
    passwordGenerator,
    userGetData,
    userPostData,
    userUpdateData,
    userDeleteData,
} from "../api/user.request";

function* uesrGetAsync() {
    try {
        const { data } = yield call(userGetData);
        yield put(userGetSuccess(data));
    } catch (error) {
        yield put(userGetFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* uesrPostAsync(action) {
    try {
        const password = yield call(passwordGenerator);
        action.payload.token = password.data.token;
        const { data } = yield call(userPostData, action.payload);
        yield put(userPostSuccess(data));
        yield put(closeDialog());
        yield put(openToast("user added successfully", "success"));
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
        yield put(openToast("user updated successfully", "success"));
    } catch (error) {
        yield put(userUpdateFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* uesrDeleteAsync(action) {
    try {
        const { data } = yield call(userDeleteData, action.payload);
        yield put(userDeleteSuccess(action.payload));
        yield put(openToast("user deleted Successfully", "success"));
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
