import {FetchUsersError, FetchUsersSuccess,FetchUsersLoading} from "../../actions/actions";
import {put,takeLatest,call} from 'redux-saga/effects'
import {apiURL} from "../../constants/ActionTypes"
async function fetchAsync() {
    // const res = await axios.get(apiURL);
    // console.log(res);
    // if (res.statusText === "OK")
    //     return await res.data;
    // throw new Error(res.statusText);
    const res = await fetch(apiURL);
    if(res.ok)
        return res.json();
    throw new Error(res.statusText);
}

function* fetchUsers() {
    yield put(FetchUsersLoading());
    try {
        const users = yield call(fetchAsync);
        yield put(FetchUsersSuccess(users));
        // navigateTo('/Dashboard');
    } catch (e) {
        yield put(FetchUsersError(e.message));
    }
}

export default function* WatchFetchUsers() {
    yield takeLatest('FETCH_USERS',fetchUsers)
}