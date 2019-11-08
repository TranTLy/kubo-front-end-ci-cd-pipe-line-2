import { takeLatest, put, call } from "redux-saga/effects";
import { READ_CATEGORY } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readCategoryPending,
  readCategorySuccess,
  readCategoryFailure
} from "../../actions/action";

async function readAsync() {
  const res = await fetch(url + "/typefilm");
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read() {
  yield put(readCategoryPending());
  try {
    const data = yield call(readAsync);
    yield put(readCategorySuccess(data));
  } catch (e) {
    yield put(readCategoryFailure(e));
  }
}

export default function* watchRead() {
  yield takeLatest("READ_CATEGORY", read);
}
