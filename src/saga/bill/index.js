import { all } from "redux-saga/effects";
import watchRead from "./read";
import watchCreateBill from "./create"

export default function* rootPromotion() {
  yield all([watchRead(), watchCreateBill()]);
}