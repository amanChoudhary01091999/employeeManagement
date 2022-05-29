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

function* BGVAsync(action) {
    try {
        const { data } = yield call(BGVPostApiRequest, action.payload);
        if (data === "User not present") {
            yield put(BGVPostFail());
            yield put(openToast(getErrorMessage(), "error"));
        } else {
            yield put(BGVPostSuccess(data));
            yield put(openToast("Form Submitted", "success"));
            const navigate = action.navigate;
            navigate("/form/covid-form");
        }
    } catch (error) {
        yield put(BGVPostFail());
        yield put(openToast(getErrorMessage(), "error"));
    }
}

function* CoCAsync(action) {
    try {
        const { data } = yield call(COCPostApiRequest, action.payload);
        if (data === "User not present") {
            yield put(COCPostFail());
            yield put(openToast("User Not Present", "error"));
        } else {
            yield put(COCPostSuccess(data));
            yield put(openToast("Form Submitted", "success"));
        }
    } catch (error) {
        yield put(COCPostFail());
        yield put(openToast(getErrorMessage(), "error"));
    }
}

function* COVIDAsync(action) {
    try {
        const { data } = yield call(COVIDPostApiRequest, action.payload);
        if (data === "User not present") {
            yield put(COVIDPostFail());
            yield put(openToast(getErrorMessage(), "error"));
        } else {
            yield put(COVIDPostSuccess(data));
            yield put(openToast("Form Submitted", "success"));
            const navigate = action.navigate;
            navigate("/form/gratuity-form");
        }
    } catch (error) {
        yield put(COVIDPostFail());
        yield put(openToast(getErrorMessage(), "error"));
    }
}

function* EPFAsync(action) {
    try {
        const { data } = yield call(EPFPostApiRequest, action.payload);
        if (data === "User not present") {
            yield put(EPFPostFail());
            yield put(openToast("User not present", "error"));
        } else {
            yield put(EPFPostSuccess(data));
            yield put(openToast("Form Submitted", "success"));
            const navigate = action.navigate;
            navigate("/form/refcheck-form");
        }
    } catch (error) {
        yield put(EPFPostFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* GFFormAsync(action) {
    try {
        const { data } = yield call(GFPostApiRequest, action.payload);
        if (data === "User not present") {
            yield put(GFPostFail());
            yield put(openToast("User not present", "error"));
        } else {
            yield put(GFPostSuccess(data, action.navigate));
            yield put(openToast("Form Submitted", "success"));
            const navigate = action.navigate;
            navigate("/form/epf-form");
        }
    } catch (error) {
        yield put(GFPostFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}

function* RCAFAsync(action) {
    try {
        const { data } = yield call(RCAFPostApiRequest, action.payload);
        if (data === "User not present") {
            yield put(RCAFPostFail());
            yield put(openToast("User not present", "error"));
        } else {
            yield put(RCAFPostSuccess(data));
            yield put(openToast("Form Submitted", "success"));
            const navigate = action.navigate;
            navigate("/form/codeofconduct-form");
        }
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
