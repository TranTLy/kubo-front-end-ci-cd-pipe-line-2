import {
    updateFilmPending,
    updateFilmSuccess,
    updateFilmFailure
} from "../../actions/action";
import { url } from "../../config/urlApi";
import { put, takeLatest, call } from 'redux-saga/effects'
import { UPDATE_FILM } from "../../config/ActionType";

async function updateAsync(film) {
    const options = {
        method: "PUT",
        body: JSON.stringify(film),
        headers: {
            "Content-type": "application/json"
        }
    };
    const res = await fetch(url + "/film?id=" + film._id, options);
    if (res.ok)
        return await res.json();
    throw new Error(res.statusText)
}

function* updateFilm(action) {
    yield put(updateFilmPending());
    try {
        const Film = yield call(updateAsync, action.film);
        console.log("saga update: ", Film)
        yield put(updateFilmSuccess(Film));
    } catch (e) {
        yield put(updateFilmFailure(e.message));
    }

}

export default function* watchUpdateFilm() {
    yield takeLatest(UPDATE_FILM, updateFilm);
}