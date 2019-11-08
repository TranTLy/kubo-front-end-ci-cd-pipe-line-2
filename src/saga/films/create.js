import { takeLatest, put, call } from "redux-saga/effects";
import { CREATE_FILM } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
    createFilmPending,
    createFilmFailure,
    createFilmSuccess
} from "../../actions/action";



async function createAsync(film) {
    const options = {
        method: "POST",
        body: JSON.stringify(film),
        headers: {
            "Content-type": "application/json"
        }
    };
    // console.log("saga: film: ", film);
    const res = await fetch(url + '/film', options);
    if (res.ok) {
        return await res.json();
    }
    throw new Error(res.statusText);

}

function* createFilm(action) {
    yield put(createFilmPending());
    try {
        const film = yield call(createAsync, action.film);
        yield put(createFilmSuccess(film));
    } catch (e) {
        yield put(createFilmFailure(e.message));
    }
}

export default function* watchCreateFilm() {
    yield takeLatest(CREATE_FILM, createFilm);
}