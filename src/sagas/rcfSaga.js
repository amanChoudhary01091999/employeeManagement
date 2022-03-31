import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
//import { USER_LOGIN_REQUEST } from "../constants/userLoginConstant";
import { RCAF_REQUEST } from "../constants/refCheckConstants";

//import { UserLoginSuccess,UserLoginFail,UserLoginRequest} from "../actions/userLoginAction";
import { RCAFRequest,RCAFSuccess,RCAFFail } from "../actions/refCheckAction";
//import UserLoginRequestURL from "../Api/loginUserPostRequest";
import RCAFPostUrl from "../Api/rcfPostRequest";

function* RCAFAsync(action) { 
    try {
        const { data } = yield call(RCAFPostUrl, action.payload);
        yield put(RCAFSuccess(data));
        //localStorage.setItem('accessToken', data.accessToken)
        console.log(data);
    } catch (error) {
        yield put(
           RCAFFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}
export function* rcfSaga() {
    yield takeLatest(RCAF_REQUEST, RCAFAsync);
}
