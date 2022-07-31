import { STATUS_CODE } from "../../constans/common";
import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchFilmListApi } from "../../services/filmService";
import { GET_FILM_LIST } from "../types/adminType";
import { GET_FILM_LIST_API } from "../types/adminSagaType";

function* getFilmListApi(Action) {
  try {
    // call: call api tren service
    let result = yield call(fetchFilmListApi);

    // nếu call thành công thì
    if (result.status === STATUS_CODE.SUCCESS) {
      // dispatch thông tin từ api trả về lên adminReducer
      yield put({
        type: GET_FILM_LIST,
        payload: result.data.content,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}

export function* actionGetFilmList() {
  yield takeLatest(GET_FILM_LIST_API, getFilmListApi);
}
