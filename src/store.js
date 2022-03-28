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
    userDeleteReducer,
    LoginUserReducer,
});
function* rootSaga() {
    yield spawn(loginSaga);
    yield spawn(userGetSaga);
    yield spawn(userPostSaga);
    yield spawn(userloginSaga);
    yield spawn(userDeleteSaga);
}
const store = createStore(
    combineReducer,
    applyMiddleware(createSagaMiddleware)
);
createSagaMiddleware.run(rootSaga);

export default store;
