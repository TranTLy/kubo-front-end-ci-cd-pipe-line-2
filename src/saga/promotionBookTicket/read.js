import { takeLatest, put, call } from "redux-saga/effects";
import { READ_PROMOTION_BOOK_TICKET } from "../../config/ActionType";
import { url } from "../../config/urlApi";
import {
  readPromotionBookTicketPending,
  readPromotionBookTicketFailure,
  readPromotionBookTicketSuccess
} from "../../actions/action";

async function readAsync(idfilm, idtypeuser) {
  // console.log("on saga: idfilm: ", idfilm, "iduser: ", idtypeuser);
  // console.log("link = ", url + "/promotion/find?idfilm=" + idfilm + "&idtypeuser=" + idtypeuser)
  const res = await fetch(url + "/promotion/find?idfilm=" + idfilm + "&idtypeuser=" + idtypeuser);
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read(action) {
  yield put(readPromotionBookTicketPending());
  try {
    const data = yield call(readAsync, action.idfilm, action.idtypeuser);
    // console.log("on saga: data= ", data);
    yield put(readPromotionBookTicketSuccess(data));
  } catch (e) {
    yield put(readPromotionBookTicketFailure(e));
  }
}

export default function* watchRead() {
  yield takeLatest(READ_PROMOTION_BOOK_TICKET, read)
}
