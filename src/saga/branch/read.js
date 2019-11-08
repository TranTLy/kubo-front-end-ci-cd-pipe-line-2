import { takeLatest, put, call } from "redux-saga/effects";
import { READ_BRANCH } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readBranchPending,
  readBranchFailure,
  readBranchSuccess
} from "../../actions/action";

async function readAsync() {
  const res = await fetch(url + "/branch");
  console.log("read branch  in saga: ", res);
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read() {
  yield put(readBranchPending());
  try {
    const data = yield call(readAsync);
    yield put(readBranchSuccess(data));
  } catch (e) {
    yield put(readBranchFailure(e));
  }
}

export default function* watchRead() {
  // yield takeLatest("READ_FILM", read);
  yield takeLatest(READ_BRANCH, read);
}
