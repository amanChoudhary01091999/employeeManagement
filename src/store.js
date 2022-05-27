import createSaga from "redux-saga";
import { spawn } from "redux-saga/effects";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { toastReducer } from "./reducers/toast.reducer";
import { loginReducer } from "./reducers/login.reducer";
import { loginSaga } from "./sagas/login.saga";
import {
    dialogReducer,
    userPostReducer,
    userGetReducer,
    userDeleteReducer,
    userUpdateReducer,
} from "./reducers/user.reducer";
import {
    BGVGetReducer,
    cocGetReducer,
    COVIDGetReducer,
    EPFGetReducer,
    GFGetReducer,
    RCAFGetReducer,
} from "./reducers/form.get.reducer";
import {
    BGVReducer,
    CoCReducer,
    COVIDReducer,
    reducerEPF,
    GFFormReducer,
    RCAFReducer,
} from "./reducers/form.post.reducer";
import {
    BGVGetSaga,
    CoCGetSaga,
    COVIDGetSaga,
    EPFGetSaga,
    GFGetSaga,
    RCAFGetSaga,
} from "./sagas/form.get.saga";
import {
    bgvSaga,
    CoCSaga,
    COVIDSaga,
    EPFSaga,
    GFFormSaga,
    rcfSaga,
} from "./sagas/form.post.saga";
import { userAuthReducer } from "./reducers/user.auth.reducer";

import {
    userGetSaga,
    userPostSaga,
    userDeleteSaga,
    userUpdateSaga,
} from "./sagas/user.saga";

import { userAuthSaga } from "./sagas/user.auth.saga";

const createSagaMiddleware = createSaga();
const combineReducer = combineReducers({
    toastReducer,
    loginReducer,
    dialogReducer,
    userPostReducer,
    userGetReducer,
    userDeleteReducer,
    userUpdateReducer,
    userAuthReducer,

    BGVReducer,
    BGVGetReducer,
    CoCReducer,
    cocGetReducer,

    COVIDReducer,
    COVIDGetReducer,
    GFFormReducer,
    GFGetReducer,
    reducerEPF,
    EPFGetReducer,
    RCAFReducer,
    RCAFGetReducer,
});
function* rootSaga() {
    yield spawn(loginSaga);
    yield spawn(userGetSaga);
    yield spawn(userPostSaga);
    yield spawn(userAuthSaga);
    yield spawn(userDeleteSaga);
    yield spawn(userUpdateSaga);

    yield spawn(bgvSaga);
    yield spawn(BGVGetSaga);

    yield spawn(CoCSaga);
    yield spawn(CoCGetSaga);

    yield spawn(COVIDSaga);
    yield spawn(COVIDGetSaga);

    yield spawn(GFFormSaga);
    yield spawn(GFGetSaga);

    yield spawn(EPFSaga);
    yield spawn(EPFGetSaga);

    yield spawn(rcfSaga);
    yield spawn(RCAFGetSaga);
}
const store = createStore(
    combineReducer,
    applyMiddleware(createSagaMiddleware)
);
createSagaMiddleware.run(rootSaga);

export default store;
