import { createStore, applyMiddleware, combineReducers } from "redux";
import { toastReducer } from "./reducers/toast.reducer";
import { loginReducer } from "./reducers/login.reducer";
import {
    dialogReducer,
    userPostReducer,
    userGetReducer,
    userDeleteReducer,
    userUpdateReducer,
} from "./reducers/user.reducer";

import { LoginUserReducer } from "./reducers/loginUserReducer";
import { reducerEPF } from "./reducers/EPFReducer";
import { BGVReducer, BGVGetReducer } from "./reducers/bgvReducer";
import { CoCReducer, cocGetReducer } from "./reducers/codeOfConductReducer";
import { COVIDReducer, COVIDGetReducer } from "./reducers/covidReducer";
import { GFFormReducer } from "./reducers/GFFormReducer";
import { RCAFReducer } from "./reducers/rcfCheckReducer";

import { userGetSaga, userPostSaga, userDeleteSaga } from "./sagas/user.saga";
import { loginSaga } from "./sagas/login.saga";
import { bgvSaga, BGVGetSaga } from "./sagas/bgvSaga";
import { CoCSaga, CoCGetSaga } from "./sagas/codeOfConductSaga";
import { COVIDSaga, COVIDGetSaga } from "./sagas/covidSaga";
import { EPFSaga } from "./sagas/EPFSaga";
import { GFFormSaga } from "./sagas/GFFormSaga";
import { rcfSaga } from "./sagas/rcfSaga";
import { userloginSaga } from "./sagas/userLoginSaga";

import createSaga from "redux-saga";
import { spawn } from "redux-saga/effects";

const createSagaMiddleware = createSaga();
const combineReducer = combineReducers({
    toastReducer,
    loginReducer,
    dialogReducer,
    userPostReducer,
    userGetReducer,
    userDeleteReducer,
    userUpdateReducer,
    LoginUserReducer,

    BGVReducer,
    BGVGetReducer,
    CoCReducer,
    cocGetReducer,

    COVIDReducer,
    COVIDGetReducer,
    GFFormReducer,
    reducerEPF,
    RCAFReducer,
});
function* rootSaga() {
    yield spawn(loginSaga);
    yield spawn(userGetSaga);
    yield spawn(userPostSaga);
    yield spawn(userloginSaga);
    yield spawn(userDeleteSaga);

    yield spawn(bgvSaga);
    yield spawn(CoCSaga);
    yield spawn(COVIDSaga);
    yield spawn(COVIDGetSaga);

    yield spawn(GFFormSaga);
    yield spawn(EPFSaga);
    yield spawn(rcfSaga);
    yield spawn(CoCGetSaga);
    yield spawn(BGVGetSaga);
}
const store = createStore(
    combineReducer,
    applyMiddleware(createSagaMiddleware)
);
createSagaMiddleware.run(rootSaga);

export default store;
