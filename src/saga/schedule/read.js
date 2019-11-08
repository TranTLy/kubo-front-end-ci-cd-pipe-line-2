import { takeLatest, put, call } from "redux-saga/effects";
import { READ_SCHEDULE } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readSchedulePending,
  readScheduleFailure,
  readScheduleSuccess
} from "../../actions/action";

async function readAsync() {
  const res = await fetch(url + "/schedule");
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read() {
  yield put(readSchedulePending());
  try {
    const data = yield call(readAsync);
    yield put(readScheduleSuccess(data));
  } catch (e) {
    yield put(readScheduleFailure(e));
  }
}

export default function* watchRead() {
  yield takeLatest(READ_SCHEDULE, read);
}
