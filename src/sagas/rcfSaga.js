import { takeLatest, put, call } from "redux-saga/effects";
import { RCAF_GET_REQUEST, RCAF_REQUEST } from "../constants/refCheckConstants";
import { RCAFSuccess, RCAFFail, RCAFGetSuccess, RCAFGetError } from "../actions/refCheckAction";
import RCAFPostUrl, { RCAFGetUrl } from "../Api/rcfPostRequest";
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



function* RCAFGetAsync(action)
{
    try{
    const {data} =yield  call (RCAFGetUrl,action.payload)
    yield put(RCAFGetSuccess(data))
    }catch(error){
        yield put(RCAFGetError(error.response && error.response.data.message
            ? error.response.data.message
            : error.message))
    }
}

export function* RCAFGetSaga()
{
    yield takeLatest(RCAF_GET_REQUEST,RCAFGetAsync)
}