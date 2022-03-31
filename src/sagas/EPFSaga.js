import { takeLatest, put, call } from "redux-saga/effects";
import { EPF_REQUEST } from "../constants/EPFConstant";
import { sucessEPF, failEPF } from "../actions/EPFAction";
import epfPostRequest from "../Api/epfPostRequest";
import { useNavigate } from "react-router-dom";

function* EPFAsync(action) {
    try {
        const { data } = yield call(epfPostRequest, action.payload);
        yield put(sucessEPF(data));
        const navigate = action.navigate;
        navigate("/refcheck-form");
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
