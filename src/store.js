import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./reducers/loginReducer";
import {
    dialogReducer,
    userPostReducer,
    userGetReducer,
    userDeleteReducer,
    userUpdateReducer,
} from "./reducers/userReducer";

import { LoginUserReducer } from "./reducers/loginUserReducer";

import { BGVReducer,BGVGetReducer } from "./reducers/bgvReducer";
import { bgvSaga,BGVGetSaga } from "./sagas/bgvSaga";

import { reducerEPF } from "./reducers/EPFReducer";
import { CoCReducer,cocGetReducer } from "./reducers/codeOfConductReducer";
import { CoCSaga,CoCGetSaga} from "./sagas/codeOfConductSaga";

import { COVIDReducer,COVIDGetReducer } from "./reducers/covidReducer";
import { COVIDSaga,COVIDGetSaga} from "./sagas/covidSaga";
import { EPFSaga } from "./sagas/EPFSaga";

import { GFFormReducer } from "./reducers/GFFormReducer";
import { GFFormSaga } from "./sagas/GFFormSaga";

import { RCAFReducer } from "./reducers/rcfCheckReducer";
import { rcfSaga } from "./sagas/rcfSaga";

import createSaga from "redux-saga";
import { loginSaga } from "./sagas/loginSaga";
import { userGetSaga, userPostSaga, userDeleteSaga } from "./sagas/userSaga";
import { spawn } from "redux-saga/effects";
import { userloginSaga } from "./sagas/userLoginSaga";

const createSagaMiddleware = createSaga();
const combineReducer = combineReducers({
    loginReducer,
    dialogReducer,
    userPostReducer,
    userGetReducer,
    userDeleteReducer,
    userUpdateReducer,
    LoginUserReducer,

    BGVReducer,BGVGetReducer,
    CoCReducer,
    cocGetReducer ,
    
    
    COVIDReducer,COVIDGetReducer,
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
