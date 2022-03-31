import { takeLatest, put, call } from "redux-saga/effects";
import { GFForm_REQUEST } from "../constants/GFFormConstants";
import { GFFormSuccess, GFFormFail } from "../actions/GFFormAction";
import GFFormPostUrl from "../Api/gratuityFormRequest";
import { useNavigate } from "react-router-dom";

function* GFFormAsync(action) {
    try {
        const { data } = yield call(GFFormPostUrl, action.payload);
        yield put(GFFormSuccess(data, action.navigate));
        const navigate = action.navigate;
        navigate("/epf-form");
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
