import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { HR_LOGIN_REQUEST } from "../constants/loginConstant";
import { loginSuccess, loginFail } from "../actions/loginAction";
import IPAddress from "../IPAddress";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
const path = "/api/auth/signin";
const b = "https://reqres.in/api/users";

const loginRequest = (data) => axios.post(IPAddress + path, data);

function* loginAsync(action) {
    try {
        const { data } = yield call(loginRequest, action.payload);
        yield put(loginSuccess(data));
        console.log(data);
    } catch (error) {
        //console.log(error.response);
        //console.log(error.response.data.message);
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
