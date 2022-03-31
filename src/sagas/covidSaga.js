import { takeLatest, put, call } from "redux-saga/effects";
import { COVID_REQUEST } from "../constants/covidConstants";
import { COVIDSuccess, COVIDFail } from "../actions/CovidAction";
import { useNavigate } from "react-router-dom";
import CovidPostUrl from "../Api/covidRequest";

function* COVIDAsync(action) {
    try {
        const { data } = yield call(CovidPostUrl, action.payload);
        yield put(COVIDSuccess(data));
        const navigate = action.navigate;
        navigate("/gratuity-form");
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
