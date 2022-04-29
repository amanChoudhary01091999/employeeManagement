import { takeLatest, put, call } from "redux-saga/effects";
import { USER_LOGIN_REQUEST } from "../constants/user.auth.constants";
import { UserLoginSuccess, UserLoginFail } from "../actions/user.auth.action";
import { userAuthApiRequest } from "../api/user.auth.request";
import getErrorMessage from "../util/ErrorHandle";
import { openToast } from "../actions/toast.action";

function* userLoginAsync(action) {
    try {
        const { data } = yield call(userAuthApiRequest, action.payload);
        yield put(UserLoginSuccess(data));
        yield put(openToast("Login Success", "success"));
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("id", data.id);
        const navigate = action.navigate;
        navigate("/bgv-form");
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        yield put(UserLoginFail());
        yield put(openToast(errorMessage, "error"));
    }
}
export function* userAuthSaga() {
    yield takeLatest(USER_LOGIN_REQUEST, userLoginAsync);
}
