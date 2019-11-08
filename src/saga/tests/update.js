import {
    UpdateUsersError, UpdateUsersLoading,
    UpdateUsersSuccess
} from "../../actions/actions";
import {apiURL} from "../../constants/ActionTypes"
import {call,takeLatest,put} from 'redux-saga/effects'
import navigateTo from '../../services/navigation'
// export default function Update(id, user) {
//     const options = {
//         method: "PUT",
//         body: JSON.stringify(user)
//     };
//     return dispatch => {
//         fetch(apiURL + '/' + id,options)
//             .then(res => {
//                 if(res.ok)
//                     return res.json();
//                 else
//                     return Promise.reject({status: res.status, statusText: res.statusText});
//             })
//             .then(res => dispatch(FetchUsersSuccess(res)))
//             .catch(err => dispatch(FetchUsersError(err.status + ":" + err.statusText)))
//     }
// }

async function updateAsync(action) {
    const options = {
        method: "PUT",
        body: JSON.stringify(action.user),
        headers: {
            "Content-type" : "application/json"
        }
    };
    const res = await fetch(apiURL + "/" + action.id,options);
    if(res.ok)
        return await res.json();
    throw new Error(res.statusText);

}

function* updateUser(action) {
    yield put(UpdateUsersLoading());
    try{
        const user = yield call(updateAsync,action);
        yield put(UpdateUsersSuccess(user));
        // navigateTo('/Dashboard');
    }catch (e) {
        yield put(UpdateUsersError(e.message));
    }

}

export default function* WatchUpdateUser() {
    yield takeLatest('UPDATE_USER',updateUser);
}