import { takeLatest, put, call } from "redux-saga/effects";
import { READ_USER_FILM_FAVOR } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readUserFilmFavorPending,
  readUserFilmFavorFailure,
  readUserFilmFavorSuccess
} from "../../actions/action";

async function readAsync(userId) {
  const res = await fetch(url + "/film-favo?iduser=" + userId);
  console.log("res in saga: ", res);
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read(action) {
  console.log("action in saga", action);
  yield put(readUserFilmFavorPending());
  try {
    const data = yield call(readAsync, action.userId);
    yield put(readUserFilmFavorSuccess(data));
  } catch (e) {
    yield put(readUserFilmFavorFailure(e));
  }
}

export default function* watchRead() {
  // yield takeLatest("READ_FILM", read);
  yield takeLatest(READ_USER_FILM_FAVOR, read);
}
