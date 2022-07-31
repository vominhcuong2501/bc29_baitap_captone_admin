import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas/rootSaga.js";
import {AdminReducer} from './reducers/adminReducer'
const middleWareSaga = createSagaMiddleware();

const rootReducer = combineReducers({
  adminReducer: AdminReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(middleWareSaga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

middleWareSaga.run(rootSaga);

export { store };
