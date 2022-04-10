import { takeLatest, put, call } from "redux-saga/effects";
import { COC_GET_REQUEST, CoC_REQUEST } from "../constants/codeOfConductConstants";
import { CoCSuccess, CoCFail,cocGetRequest,cocGetSuccess,cocGetFail } from "../actions/CodeOfConductFormAction";
import CoCPostUrl from "../Api/cocPostRequest";
import { useNavigate } from "react-router-dom";
import { cocGetData } from "../Api/cocPostRequest";

function* CoCAsync(action) {
    try {
        const { data } = yield call(CoCPostUrl, action.payload);
        yield put(CoCSuccess(data));
        console.log(data)
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


function* cocGetAsync() {
    try {
        const { data } = yield call(cocGetData);
        yield put(cocGetSuccess(data));
    } catch (error) {
        yield put(
            cocGetFail(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}


export function* CoCGetSaga() {
    yield takeLatest(COC_GET_REQUEST, cocGetAsync);
}