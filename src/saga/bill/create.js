import { takeLatest, put, call } from "redux-saga/effects";
import { CREATE_BILL } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
    createBillPending,
    createBillFailure,
    createBillSuccess
} from "../../actions/action";



async function createAsync(bill) {
    const options = {
        method: "POST",
        body: JSON.stringify(bill),
        headers: {
            "Content-type": "application/json"
        }
    };
    // console.log("saga: bill: ", bill);
    const res = await fetch(url + '/bill', options);
    if (res.ok) {
        return await res.json();
    }
    throw new Error(res.statusText);

}

function* createBill(action) {
    yield put(createBillPending());
    try {
        const bill = yield call(createAsync, action.bill);
        yield put(createBillSuccess(bill));
    } catch (e) {
        yield put(createBillFailure(e.message));
    }
}

export default function* watchCreateBill() {
    yield takeLatest(CREATE_BILL, createBill);
}