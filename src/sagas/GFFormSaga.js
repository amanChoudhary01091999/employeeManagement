import { takeLatest, put, call } from "redux-saga/effects";
import { GFForm_REQUEST, GF_GET_REQUEST } from "../constants/GFFormConstants";
import { GFFormSuccess, GFFormFail, GFGetSuccess, GFGetError } from "../actions/GFFormAction";
import GFFormPostUrl, { GFGetUrl } from "../Api/gratuityFormRequest";
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


function* GFGetAsync(action)
{
    try{
    const {data} =yield  call (GFGetUrl,action.payload)
    yield put(GFGetSuccess(data))
    }catch(error){
        yield put(GFGetError(error.response && error.response.data.message
            ? error.response.data.message
            : error.message))
    }
}

export function* GFGetSaga()
{
    yield takeLatest(GF_GET_REQUEST,GFGetAsync)
}
