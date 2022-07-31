import { all } from "redux-saga/effects";
import * as adminSaga from "./adminSaga";
import * as userSaga from "./userSaga";

export function* rootSaga() {
  yield all([adminSaga.actionGetFilmList(), userSaga.actionGetUserList()]);
}
