import {DeleteUsersError,DeleteUsersLoading,DeleteUsersSuccess} from "../../actions/actions";
import {apiURL} from "../../constants/ActionTypes"
import {put,takeLatest,call} from 'redux-saga/effects'
import navigateTo from '../../services/navigation'
// export default function Delete(id) {
//     return dispatch => {
//         fetch(apiURL +'/' + id,{
//             method: "DELETE"
//         })
//             .then(res => {
//                 if(res.ok)
//                     return res.json();
//                 else
//                     return Promise.reject({status: res.status, statusText: res.statusText});
//             })
//             .then(res => dispatch(FetchUsersSuccess(res)))
//             .catch(err => dispatch(FetchUsersError(err.status + ":" + err.statusText)));
//     }
//
// }

async function deleteAsync(id) {
    const option = {
        method: "DELETE",
    };
    const res = await fetch(apiURL +'/' + id, option);
    if(res.ok)
        return await res.json();
    throw new Error(res.statusText);
}

function* deleteUser(action) {
    yield put(DeleteUsersLoading());
    try{
        const user = yield call(deleteAsync,action.id);
        yield put(DeleteUsersSuccess(user));
        // navigateTo('/Dashboard');
    }catch (e) {
        yield put(DeleteUsersError(e.message));
    }
}

export default function* WatchDeleteUser() {
    yield takeLatest('DELETE_USER',deleteUser);
}