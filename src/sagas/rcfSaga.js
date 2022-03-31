import { takeLatest, put, call } from "redux-saga/effects";
import { RCAF_REQUEST } from "../constants/refCheckConstants";
import { RCAFSuccess, RCAFFail } from "../actions/refCheckAction";
import RCAFPostUrl from "../Api/rcfPostRequest";
import { useNavigate } from "react-router-dom";

function* RCAFAsync(action) {
    try {
        const { data } = yield call(RCAFPostUrl, action.payload);
        yield put(RCAFSuccess(data));
        const navigate = action.navigate;
        navigate("/codeOfConduct-form");
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
