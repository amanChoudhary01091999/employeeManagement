import { takeLatest, put, call } from "redux-saga/effects";
import { USER_LOGIN_REQUEST } from "../constants/userLoginConstant";
import { UserLoginSuccess, UserLoginFail } from "../actions/userLoginAction";
import UserLoginRequestURL from "../Api/loginUserPostRequest";
import getErrorMessage from "../util/ErrorHandle";
import { openToast } from "../actions/toast.action";

function* userLoginAsync(action) {
    try {
        const { data } = yield call(UserLoginRequestURL, action.payload);
        yield put(UserLoginSuccess(data));
        yield put(openToast("Login Success", "success"));
        localStorage.setItem("accessToken", data.accessToken);
        console.log(data);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        yield put(UserLoginFail());
        yield put(openToast(errorMessage, "error"));
    }
}
export function* userloginSaga() {
    yield takeLatest(USER_LOGIN_REQUEST, userLoginAsync);
}
