import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
//import { USER_LOGIN_REQUEST } from "../constants/userLoginConstant";
import { GFForm_REQUEST } from "../constants/GFFormConstants";

//import { UserLoginSuccess,UserLoginFail,UserLoginRequest} from "../actions/userLoginAction";
import { GFFormRequest,GFFormSuccess,GFFormFail } from "../actions/GFFormAction";
//import UserLoginRequestURL from "../Api/loginUserPostRequest";
import GFFormPostUrl from "../Api/gratuityFormRequest";

function* GFFormAsync(action) { 
    try {
        const { data } = yield call(GFFormPostUrl, action.payload);
        yield put(GFFormSuccess(data));
        //localStorage.setItem('accessToken', data.accessToken)
        console.log(data);
    } catch (error) {
        yield put(
           GFFormFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}
export function* GFFormSaga() {
    yield takeLatest(GFForm_REQUEST, GFFormAsync);
}
