import { takeLatest, put, call } from "redux-saga/effects";
import { HR_LOGIN_REQUEST } from "../constants/loginConstant";
import { loginSuccess, loginFail } from "../actions/loginAction";
import loginPostRequest from "../Api/loginPostRequest";
import { openToast } from "../actions/toast.action";
import getErrorMessage from "../util/ErrorHandle";

function* loginAsync(action) {
    try {
        const { data } = yield call(loginPostRequest, action.payload);
        localStorage.setItem("authToken", data.accessToken);
        yield put(loginSuccess(data));
        yield put(openToast("Login Success", "success"));
        action.navigate("/", { replace: true });
    } catch (error) {
        yield put(loginFail());
        yield put(openToast(getErrorMessage(error), "error"));
    }
}
export function* loginSaga() {
    yield takeLatest(HR_LOGIN_REQUEST, loginAsync);
}
