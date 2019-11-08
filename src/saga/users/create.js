import {CreateUsersLoading,CreateUsersSuccess,CreateUsersError} from "../../actions/action"

import {put,takeLatest,call} from 'redux-saga/effects'
import { url } from "../../config/urlApi";

async function createAsync(user) {

    const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type" : "application/json"
        }
    };
    console.log("user", user);
    const res = await fetch(url + "/user",options);
    if(res.ok){
        return await res.json();
    }
    throw new Error(res.statusText);

}

function* create(action) {
    yield put(CreateUsersLoading());
    try {
        const user = yield call(createAsync,action.user);
        yield put(CreateUsersSuccess(user));
        // navigateTo('/')
    } catch (e) {
        yield put(CreateUsersError(e.message));
    }
}

export default function* WatchCreate() {
    yield takeLatest('CREATE_USER',create);
}