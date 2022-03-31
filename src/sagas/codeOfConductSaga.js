import { takeLatest, put, call } from "redux-saga/effects";
import { CoC_REQUEST } from "../constants/codeOfConductConstants";
import { CoCSuccess, CoCFail } from "../actions/CodeOfConductFormAction";
import CoCPostUrl from "../Api/cocPostRequest";
import { useNavigate } from "react-router-dom";

function* CoCAsync(action) {
    try {
        const { data } = yield call(CoCPostUrl, action.payload);
        yield put(CoCSuccess(data));
        //navigate("/")
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
