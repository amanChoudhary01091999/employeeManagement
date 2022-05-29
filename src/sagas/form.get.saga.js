import { takeLatest, put, call, delay } from "redux-saga/effects";
import getErrorMessage from "../util/ErrorHandle";
import { openToast } from "../actions/toast.action";
import {
    BGV_GET_REQUEST,
    COC_GET_REQUEST,
    COVID_GET_REQUEST,
    EPF_GET_REQUEST,
    GF_GET_REQUEST,
    RCAF_GET_REQUEST,
} from "../constants/form.get.constants";
import {
    BGVGetSuccess,
    BGVGetError,
    COCGetSuccess,
    COCGetFail,
    COVIDGetSuccess,
    COVIDGetError,
    EPFGetSuccess,
    EPFGetError,
    GFGetSuccess,
    GFGetError,
    RCAFGetSuccess,
    RCAFGetError,
} from "../actions/form.get.action";
import {
    BGVGetApiRequest,
    COCGetApiRequest,
    COVIDGetApiRequest,
    EPFGetApiRequest,
    GFGetApiRequest,
    RCAFGetApiRequest,
} from "../api/form.request";

function* BGVGetAsync(action) {
    try {
        const { data } = yield call(BGVGetApiRequest, action.payload);
        if (data && data.id === undefined) {
            yield put(BGVGetSuccess(data));
            yield put(openToast("Form not filled", "error"));
        } else {
            yield put(BGVGetSuccess(data));
            yield put(openToast("Form filled", "success"));
        }
    } catch (error) {
        yield put(BGVGetError());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}
function* cocGetAsync(action) {
    try {
        const { data } = yield call(COCGetApiRequest, action.payload);
        if (data && data.id === undefined) {
            yield put(COCGetSuccess(data));
            yield put(openToast("Form not filled", "error"));
        } else {
            yield put(COCGetSuccess(data));
            yield put(openToast("Form filled", "success"));
        }
    } catch (error) {
        yield put(COCGetFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* COVIDGetAsync(action) {
    try {
        const { data } = yield call(COVIDGetApiRequest, action.payload);
        if (data && data.id === undefined) {
            yield put(COVIDGetSuccess(data));
            yield put(openToast("Form not filled", "error"));
        } else {
            yield put(COVIDGetSuccess(data));
            yield put(openToast("Form filled", "success"));
        }
    } catch (error) {
        yield put(COVIDGetError());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* EPFGetAsync(action) {
    try {
        const { data } = yield call(EPFGetApiRequest, action.payload);
        if (data && data.id === undefined) {
            yield put(EPFGetSuccess(data));
            yield put(openToast("Form not filled", "error"));
        } else {
            yield put(EPFGetSuccess(data));
            yield put(openToast("Form filled", "success"));
        }
        yield put(EPFGetSuccess(data));
    } catch (error) {
        yield put(EPFGetError());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}
function* GFGetAsync(action) {
    try {
        const { data } = yield call(GFGetApiRequest, action.payload);
        if (data && data.id === undefined) {
            yield put(GFGetSuccess(data));
            yield put(openToast("Form not filled", "error"));
        } else {
            yield put(GFGetSuccess(data));
            yield put(openToast("Form filled", "success"));
        }
    } catch (error) {
        yield put(GFGetError());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}
function* RCAFGetAsync(action) {
    try {
        const { data } = yield call(RCAFGetApiRequest, action.payload);
        if (data && data.id === undefined) {
            yield put(RCAFGetSuccess(data));
            yield put(openToast("Form not filled", "error"));
        } else {
            yield put(RCAFGetSuccess(data));
            yield put(openToast("Form filled", "success"));
        }
    } catch (error) {
        yield put(RCAFGetError());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

export function* BGVGetSaga() {
    yield takeLatest(BGV_GET_REQUEST, BGVGetAsync);
}
export function* CoCGetSaga() {
    yield takeLatest(COC_GET_REQUEST, cocGetAsync);
}
export function* COVIDGetSaga() {
    yield takeLatest(COVID_GET_REQUEST, COVIDGetAsync);
}
export function* EPFGetSaga() {
    yield takeLatest(EPF_GET_REQUEST, EPFGetAsync);
}
export function* GFGetSaga() {
    yield takeLatest(GF_GET_REQUEST, GFGetAsync);
}
export function* RCAFGetSaga() {
    yield takeLatest(RCAF_GET_REQUEST, RCAFGetAsync);
}
