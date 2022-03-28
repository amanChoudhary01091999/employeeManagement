import { takeLatest, put, call } from "redux-saga/effects";
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
    userPostRequest,
    closeDialog,
} from "../actions/userAction";
import {
    userGetData,
    userPostData,
    userUpdateData,
    userDeleteData,
} from "../Api/userRequest";

function* uesrGetAsync(action) {
    try {
        const { data } = yield call(userGetData);
        yield put(userGetSuccess(data));

        //console.log(data);
    } catch (error) {
        yield put(
            userGetFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}

function* uesrPostAsync(action) {
    try {
        const { data } = yield call(userPostData, action.payload);
        yield put(userPostSuccess(data));
        yield put(closeDialog());
        //console.log(data);
    } catch (error) {
        yield put(
            userPostFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}

function* uesrUpdateAsync(action) {}

function* uesrDeleteAsync(action) {}
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
