import {
    UpdateUsersError, UpdateUsersLoading,
    UpdateUsersSuccess
} from "../../actions/actions";
import { apiURL } from "../../constants/ActionTypes"
import { call, takeLatest, put } from 'redux-saga/effects'

async function updateAsync(user) {
    const options = {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    };
    const res = await fetch("/user");
    if (res.ok)
        return await res.json();
    throw new Error(res.statusText);

}

function* updateUser(action) {
    yield put(UpdateUsersLoading());
    try {
        const user = yield call(updateAsync, action.user);
        yield put(UpdateUsersSuccess(user));
        // navigateTo('/Dashboard');
    } catch (e) {
        yield put(UpdateUsersError(e.message));
    }

}

export default function* WatchUpdateUser() {
    yield takeLatest(UPDATE_USER, updateUser);
}