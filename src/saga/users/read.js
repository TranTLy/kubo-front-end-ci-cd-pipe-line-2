import { takeLatest, put, call } from "redux-saga/effects";
import { READ_USER } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readUserSuccess,
  readUserPending,
  readUserFailure
} from "../../actions/action";

async function readAsync() {
  console.log("read user bẻoe");

  const res = await fetch(url + "/user");
  console.log("read user");
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read() {
  yield put(readUserPending());
  try {
    const data = yield call(readAsync);
    yield put(readUserSuccess(data));
  } catch (e) {
    yield put(readUserFailure(e));
  }
}

export default function* watchRead() {
  yield takeLatest(READ_USER, read);
}
