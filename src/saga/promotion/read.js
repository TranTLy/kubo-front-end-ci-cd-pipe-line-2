import { takeLatest, put, call } from "redux-saga/effects";
import { READ_PROMOTION } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readPromotionPending,
  readPromotionFailure,
  readPromotionSuccess
} from "../../actions/action";

async function readAsync() {
  const res = await fetch(url + "/promotion");
  // console.log("res in saga: ", res);
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read() {
  yield put(readPromotionPending());
  try {
    const data = yield call(readAsync);
    yield put(readPromotionSuccess(data));
  } catch (e) {
    yield put(readPromotionFailure(e));
  }
}

export default function* watchRead() {
  yield takeLatest(READ_PROMOTION, read);
}