import { all } from "redux-saga/effects";
import watchRead from "./read";
import watchDeleteFilm from "./delete";
import watchUpdateFilm from './update';
import watchCreateFilm from './create';
export default function* rootFilm() {
  yield all([
    watchRead(),
    watchDeleteFilm(),
    watchUpdateFilm(),
    watchCreateFilm()]);
}
