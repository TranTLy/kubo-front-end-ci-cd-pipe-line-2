import { all } from "redux-saga/effects";
import watchRead from "./read";

export default function* rootPromotion() {
  yield all([watchRead()]);
}