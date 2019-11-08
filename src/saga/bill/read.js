import { takeLatest, put, call } from "redux-saga/effects";
import { READ_BILL } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readBillPending,
  readBillFailure,
  readBillSuccess
} from "../../actions/action";

async function readAsync(idUser) {
  const res = await fetch(url + "/bill?iduser=" + idUser);
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read(action) {
  yield put(readBillPending());
  try {
    const data = yield call(readAsync, action.idUser);
    yield put(readBillSuccess(data));
  } catch (e) {
    yield put(readBillFailure(e));
  }
}

export default function* watchRead() {
  yield takeLatest(READ_BILL, read);
}