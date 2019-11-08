import {
    deleteFilmPending,
    deleteFilmSuccess,
    deleteFilmFailure
} from "../../actions/action";
import { url } from "../../config/urlApi";
import { put, takeLatest, call } from 'redux-saga/effects'
import { DELETE_FILM } from "../../config/ActionType";

async function deleteAsync(idfilm) {
    console.log("saga: on delete film");
    const option = {
        method: "DELETE",
    };
    const res = await fetch(url + '/film?id=' + idfilm, option);
    if (res.ok)
        return await res.json();
    throw new Error(res.statusText);
}

function* deleteFilm(action) {
    yield put(deleteFilmPending());
    try {
        const data = yield call(deleteAsync, action.idFilm);
        console.log("saga delete: ", data);
        yield put(deleteFilmSuccess(data));
    } catch (e) {
        yield put(deleteFilmFailure(e.message));
    }
}

export default function* watchDeleteFilm() {
    yield takeLatest(DELETE_FILM, deleteFilm);
}