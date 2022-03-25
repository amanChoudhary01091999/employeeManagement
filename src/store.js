import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./reducers/loginReducer";
import { dialogReducer, userPostReducer } from "./reducers/userReducer";
import createSaga from "redux-saga";
import { loginSaga } from "./sagas/loginSaga";
import { userGetSaga, userPostSaga } from "./sagas/userSaga";
import { spawn } from "redux-saga/effects";

const createSagaMiddleware = createSaga();
const combineReducer = combineReducers({
    loginReducer,
    dialogReducer,
    userPostReducer,
});
function* rootSaga() {
    yield spawn(loginSaga);
    yield spawn(userGetSaga);
    yield spawn(userPostSaga);
}
const store = createStore(
    combineReducer,
    applyMiddleware(createSagaMiddleware)
);
createSagaMiddleware.run(rootSaga);

export default store;
