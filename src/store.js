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
import { BGVReducer } from "./reducers/bgvReducer";
import { bgvSaga } from "./sagas/bgvSaga";

import { CoCReducer } from "./reducers/codeOfConductReducer";
import { CoCSaga } from "./sagas/codeOfConductSaga";


import { COVIDReducer } from "./reducers/covidReducer";
import { COVIDSaga } from "./sagas/covidSaga";


import { GFFormReducer } from "./reducers/GFFormReducer";
import { GFFormSaga } from "./sagas/GFFormSaga";


import { RCAFReducer } from "./reducers/rcfCheckReducer";
import { rcfSaga } from "./sagas/rcfSaga";





import createSaga from "redux-saga";
import { loginSaga } from "./sagas/loginSaga";
import { userGetSaga, userPostSaga,userDeleteSaga} from "./sagas/userSaga";
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
    BGVReducer,
    CoCReducer,
    COVIDReducer,
    GFFormReducer,
    RCAFReducer
    
    
});
function* rootSaga() {
    yield spawn(loginSaga);
    yield spawn(userGetSaga);
    yield spawn(userPostSaga);
    yield spawn(userloginSaga);
    yield spawn(userDeleteSaga);
    yield spawn(bgvSaga)
    yield spawn(CoCSaga)
    yield spawn(COVIDSaga)
    yield spawn(GFFormSaga)
    yield spawn(rcfSaga)
}
const store = createStore(
    combineReducer,
    applyMiddleware(createSagaMiddleware)
);
createSagaMiddleware.run(rootSaga);

export default store;
