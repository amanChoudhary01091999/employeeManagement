import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
//import { USER_LOGIN_REQUEST } from "../constants/userLoginConstant";
import { COVID_REQUEST } from "../constants/covidConstants";

//import { UserLoginSuccess,UserLoginFail,UserLoginRequest} from "../actions/userLoginAction";
import { COVIDRequest,COVIDSuccess,COVIDFail } from "../actions/CovidAction";
//import UserLoginRequestURL from "../Api/loginUserPostRequest";
import CovidPostUrl from "../Api/covidRequest";

function* COVIDAsync(action) { 
    try {
        const { data } = yield call(CovidPostUrl, action.payload);
        yield put(COVIDSuccess(data));
        //localStorage.setItem('accessToken', data.accessToken)
        console.log(data);
    } catch (error) {
        yield put(
           COVIDFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}
export function* COVIDSaga() {
    yield takeLatest(COVID_REQUEST, COVIDAsync);
}
