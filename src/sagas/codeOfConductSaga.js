import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
//import { HR_LOGIN_REQUEST } from "../constants/loginConstant";
import { CoC_REQUEST } from "../constants/codeOfConductConstants";
//import { loginSuccess, loginFail } from "../actions/loginAction";

import { CoCSuccess,CoCFail } from "../actions/CodeOfConductFormAction";
//import loginPostRequest from "../Api/loginPostRequest";
import CoCPostUrl from "../Api/cocPostRequest";

function* CoCAsync(action) {
    try {
        const { data } = yield call(CoCPostUrl, action.payload);
        yield put(CoCSuccess(data));
        //localStorage.setItem('', '')
    } catch (error) {
        yield put(
            CoCFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}
export function* CoCSaga() {
    yield takeLatest(CoC_REQUEST, CoCAsync);
}
