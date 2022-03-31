import { takeLatest, put, call } from "redux-saga/effects";
import { EPF_REQUEST } from "../constants/EPFConstant";
import { sucessEPF, failEPF } from "../actions/EPFAction";
import epfPostRequest from "../Api/epfPostRequest";

function* EPFAsync(action) {
    try {
        const { data } = yield call(epfPostRequest, action.payload);
        yield put(sucessEPF(data));
    } catch (error) {
        yield put(
            failEPF(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
}
export function* EPFSaga() {
    yield takeLatest(EPF_REQUEST, EPFAsync);
}
