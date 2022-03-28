import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { USER_LOGIN_REQUEST } from "../constants/userLoginConstant";

import { UserLoginSuccess,UserLoginFail,UserLoginRequest} from "../actions/userLoginAction";
import UserLoginRequestURL from "../Api/loginUserPostRequest";

function* userLoginAsync(action) { 
    try {
        const { data } = yield call(UserLoginRequestURL, action.payload);
        yield put(UserLoginSuccess(data));
        localStorage.setItem('accessToken', data.accessToken)
        console.log(data);
    } catch (error) {
        yield put(
            UserLoginFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}
export function* userloginSaga() {
    yield takeLatest(USER_LOGIN_REQUEST, userLoginAsync);
}
