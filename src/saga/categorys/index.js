import { all } from "redux-saga/effects";
import watchRead from "./read";

export default function* rootCategory() {
  yield all([watchRead()]);
}