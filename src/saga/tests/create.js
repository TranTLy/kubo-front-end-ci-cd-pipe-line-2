import {CreateUsersLoading,CreateUsersSuccess,CreateUsersError} from "../../actions/actions";
import {apiURL} from "../../constants/ActionTypes"
import {put,takeLatest,call} from 'redux-saga/effects'
import navigateTo from '../../services/navigation'
// export default function CreateEmployee(employee) {
//     const options = {
//         method: "POST",
//         body: JSON.stringify(employee),
//         headers: {
//             "Content-type" : "application/json"
//         }
//     };
//     return dispatch => {
//             fetch(apiURL,options)
//                 .then(res => {
//                     if(res.ok)
//                         return res.json();
//                     else {
//                         return Promise.reject({status: res.status, statusText: res.statusText});
//                     }
//                 })
//                 .then(res => {
//                     dispatch(FetchUsersSuccess(res))
//                 })
//                 .catch(err => dispatch(FetchUsersError(err.status + err.statusText)))
//     }
// }
async function createAsync(user) {

    const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type" : "application/json"
        }
    };
    console.log("user", user);
    const res = await fetch(apiURL,options);
    if(res.ok){
        return await res.json();
    }
    throw new Error(res.statusText);

}

function* createUser(action) {
    yield put(CreateUsersLoading());
    try {
        const user = yield call(createAsync,action.user);
        yield put(CreateUsersSuccess(user));
        // navigateTo('/')
    } catch (e) {
        yield put(CreateUsersError(e.message));
    }
}

export default function* WatchCreateUser() {
    yield takeLatest('CREATE_USER',createUser);
}