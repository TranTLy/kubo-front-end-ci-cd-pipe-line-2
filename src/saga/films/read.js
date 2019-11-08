import { takeLatest, put, call } from "redux-saga/effects";
import { READ_FILM } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readFilmPending,
  readFilmFailure,
  readFilmSuccess
} from "../../actions/action";

async function readAsync() {
  const res = await fetch(url + "/film");
  // console.log("res in saga: ", res);
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read() {
  yield put(readFilmPending());
  try {
    const data = yield call(readAsync);
    yield put(readFilmSuccess(data));
  } catch (e) {
    yield put(readFilmFailure(e));
  }
}

export default function* watchRead() {
  // yield takeLatest("READ_FILM", read);
  yield takeLatest(READ_FILM, read);
}
