import { takeLatest, put, call } from "redux-saga/effects";
import { openToast } from "../actions/toast.action";
import getErrorMessage from "../util/ErrorHandle";
import {
    BGV_POST_REQUEST,
    COC_POST_REQUEST,
    COVID_POST_REQUEST,
    EPF_POST_REQUEST,
    GF_POST_REQUEST,
    RCAF_POST_REQUEST,
} from "../constants/form.post.constants";
import {
    BGVPostSuccess,
    BGVPostFail,
    COCPostSuccess,
    COCPostFail,
    COVIDPostSuccess,
    COVIDPostFail,
    EPFPostSuccess,
    EPFPostFail,
    GFPostSuccess,
    GFPostFail,
    RCAFPostSuccess,
    RCAFPostFail,
} from "../actions/form.post.action";
import {
    BGVPostApiRequest,
    COCPostApiRequest,
    COVIDPostApiRequest,
    EPFPostApiRequest,
    GFPostApiRequest,
    RCAFPostApiRequest,
} from "../api/form.request";

import BGVPostUrl from "../api/bgvPostRequest";
import { BGVGetUrl } from "../api/bgvPostRequest";
import CovidPostUrl, { covidGetData } from "../api/covidRequest";
import { cocGetData } from "../api/cocPostRequest";
import CoCPostUrl from "../api/cocPostRequest";
import RCAFPostUrl, { RCAFGetUrl } from "../api/rcfPostRequest";
import epfPostRequest, { EPFGetUrl } from "../api/epfPostRequest";
import GFFormPostUrl, { GFGetUrl } from "../api/gratuityFormRequest";

function* BGVAsync(action) {
    try {
        const { data } = yield call(BGVPostUrl, action.payload);
        yield put(BGVPostSuccess(data));
        const navigate = action.navigate;
        navigate("/covid-form");
    } catch (error) {
        yield put(BGVPostFail());
        yield put(openToast(getErrorMessage(), "error"));
    }
}

function* CoCAsync(action) {
    try {
        const { data } = yield call(CoCPostUrl, action.payload);
        yield put(COCPostSuccess(data));
        console.log(data);
    } catch (error) {
        yield put(COCPostFail());
        yield put(openToast(getErrorMessage(), "error"));
    }
}

function* COVIDAsync(action) {
    try {
        const { data } = yield call(CovidPostUrl, action.payload);
        yield put(COVIDPostSuccess(data));
        const navigate = action.navigate;
        navigate("/gratuity-form");
    } catch (error) {
        yield put(COVIDPostFail());
        yield put(openToast(getErrorMessage(), "error"));
    }
}

function* EPFAsync(action) {
    try {
        const { data } = yield call(epfPostRequest, action.payload);
        yield put(EPFPostSuccess(data));
        yield put(openToast("Form Submitted", "error"));
        const navigate = action.navigate;
        navigate("/refcheck-form");
    } catch (error) {
        yield put(EPFPostFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* GFFormAsync(action) {
    try {
        const { data } = yield call(GFFormPostUrl, action.payload);
        yield put(GFPostSuccess(data, action.navigate));
        const navigate = action.navigate;
        navigate("/epf-form");
    } catch (error) {
        yield put(GFPostFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* RCAFAsync(action) {
    try {
        const { data } = yield call(RCAFPostUrl, action.payload);
        yield put(RCAFPostSuccess(data));
        const navigate = action.navigate;
        navigate("/codeOfConduct-form");
    } catch (error) {
        yield put(RCAFPostFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

export function* bgvSaga() {
    yield takeLatest(BGV_POST_REQUEST, BGVAsync);
}
export function* CoCSaga() {
    yield takeLatest(COC_POST_REQUEST, CoCAsync);
}
export function* COVIDSaga() {
    yield takeLatest(COVID_POST_REQUEST, COVIDAsync);
}
export function* EPFSaga() {
    yield takeLatest(EPF_POST_REQUEST, EPFAsync);
}
export function* GFFormSaga() {
    yield takeLatest(GF_POST_REQUEST, GFFormAsync);
}
export function* rcfSaga() {
    yield takeLatest(RCAF_POST_REQUEST, RCAFAsync);
}
