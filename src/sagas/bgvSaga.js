import { takeLatest, put, call } from "redux-saga/effects";
import { BGV_REQUEST } from "../constants/bgvConstants";
import { BGVSuccess, BGVFail } from "../actions/BGVFormAction";
import BGVPostUrl from "../Api/bgvPostRequest";

function* BGVAsync(action) {
    try {
        const { data } = yield call(BGVPostUrl, action.payload);
        yield put(BGVSuccess(data));
        const navigate = action.navigate;
        navigate("/covid-form");
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
