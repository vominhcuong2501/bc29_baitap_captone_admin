import { STATUS_CODE } from "../../constans/common";
import { takeLatest, call, put, delay } from "redux-saga/effects";
import { GET_USER_LIST_API } from "../types/adminSagaType";
import { GET_USER_LIST } from "../types/adminType";
import { fetchUserListApi } from "../../services/userService";

function* getUserListApi(Action) {
  try {
    // call: call api tren service
    let result = yield call(fetchUserListApi);

    // nếu call thành công thì
    if (result.status === STATUS_CODE.SUCCESS) {
      // dispatch thông tin từ api trả về lên adminReducer
      yield put({
        type: GET_USER_LIST,
        payload: result.data.content,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}

export function* actionGetUserList() {
  yield takeLatest(GET_USER_LIST_API, getUserListApi);
}
