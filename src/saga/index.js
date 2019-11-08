import { all } from "redux-saga/effects";
import rootCategory from "./categorys/index";
import rootFilm from "./films/index";
import rootUserFilmFavor from "./userFilmFavor/index";
import rootBranch from "./branch/index";
import rootSchedule from "./schedule/index";
import rootPromotion from './promotion/index';
import rootPromotionBookTicket from './promotionBookTicket/index';
import rootTypePayment from './typepayment/index';
import rootUser from "./users/index";
import rootBill from "./bill/index";

export default function* rootSaga() {
  yield all([
    rootCategory(),
    rootFilm(),
    rootUserFilmFavor(),
    rootBranch(),
    rootSchedule(),
    rootPromotion(),
    rootPromotionBookTicket(),
    rootTypePayment(),
    rootUser(),
    rootBill()]);
}
