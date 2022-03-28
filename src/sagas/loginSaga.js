import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { HR_LOGIN_REQUEST } from "../constants/loginConstant";
import { loginSuccess, loginFail } from "../actions/loginAction";
import loginPostRequest from "../Api/loginPostRequest";

function* loginAsync(action) {
    try {
        const { data } = yield call(loginPostRequest, action.payload);
        yield put(loginSuccess(data));
        //localStorage.setItem('', '')
    } catch (error) {
        yield put(
            loginFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}
export function* loginSaga() {
    yield takeLatest(HR_LOGIN_REQUEST, loginAsync);
}
