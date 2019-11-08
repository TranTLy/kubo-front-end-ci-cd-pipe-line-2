import { all } from "redux-saga/effects";
import watchRead from "./read";

export default function* rootPromotionBookTicket() {
  yield all([watchRead()]);
}