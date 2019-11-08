import { all } from "redux-saga/effects";
import watchRead from "./read";
import watchCreate from "./create"

export default function* rootUser() {
  yield all([watchRead(),watchCreate()]);
}
