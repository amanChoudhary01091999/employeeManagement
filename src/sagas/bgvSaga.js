import { takeLatest, put, call } from "redux-saga/effects";
import { BGV_GET_ERROR, BGV_GET_REQUEST, BGV_REQUEST } from "../constants/bgvConstants";
import { BGVSuccess, BGVFail, BGVGetSuccess, BGVGetError } from "../actions/BGVFormAction";
import BGVPostUrl from "../Api/bgvPostRequest";
import { BGVGetUrl } from "../Api/bgvPostRequest";

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


function* BGVGetAsync(action)
{
    try{
    const {data} =yield  call (BGVGetUrl,action.payload)
    yield put(BGVGetSuccess(data))
    }catch(error){
        yield put(BGVGetError(error.response && error.response.data.message
            ? error.response.data.message
            : error.message))
    }
}

export function* BGVGetSaga()
{
    yield takeLatest(BGV_GET_REQUEST,BGVGetAsync)
}