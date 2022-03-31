import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
//import { USER_LOGIN_REQUEST } from "../constants/userLoginConstant";
import { BGV_REQUEST } from "../constants/bgvConstants";

//import { UserLoginSuccess,UserLoginFail,UserLoginRequest} from "../actions/userLoginAction";
import { BGVRequest,BGVSuccess,BGVFail } from "../actions/BGVFormAction";
//import UserLoginRequestURL from "../Api/loginUserPostRequest";
import BGVPostUrl from "../Api/bgvPostRequest";

function* BGVAsync(action) { 
    try {
        const { data } = yield call(BGVPostUrl, action.payload);
        yield put(BGVSuccess(data));
        //localStorage.setItem('accessToken', data.accessToken)
        console.log(data);
    } catch (error) {
        yield put(
           BGVFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}
export function* bgvSaga() {
    yield takeLatest(BGV_REQUEST, BGVAsync);
}
