import { takeLatest, put, call } from "redux-saga/effects";
import { READ_TYPEPAYMENT } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readTypePaymentPending,
  readTypePaymentFailure,
  readTypePaymentSuccess
} from "../../actions/action";

async function readAsync() {
  const res = await fetch(url + "/typepayment");
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read() {
  yield put(readTypePaymentPending());
  try {
    const data = yield call(readAsync);
    yield put(readTypePaymentSuccess(data));
  } catch (e) {
    yield put(readTypePaymentFailure(e));
  }
}

export default function* watchRead() {
  yield takeLatest(READ_TYPEPAYMENT, read);
}