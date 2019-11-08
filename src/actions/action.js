import {
  LOG_IN,
  LOG_OUT,

  READ_CATEGORY_PENDING,
  READ_CATEGORY_SUCCESS,
  READ_CATEGORY_FAILURE,

  READ_FILM_PENDING,
  READ_FILM_FAILURE,
  READ_FILM_SUCCESS,

  DELETE_FILM_PENDING,
  DELETE_FILM_FAILURE,
  DELETE_FILM_SUCCESS,

  CREATE_FILM_PENDING,
  CREATE_FILM_FAILURE,
  CREATE_FILM_SUCCESS,

  UPDATE_FILM_PENDING,
  UPDATE_FILM_FAILURE,
  UPDATE_FILM_SUCCESS,

  READ_USER_FILM_FAVOR_PENDING,
  READ_USER_FILM_FAVOR_FAILURE,
  READ_USER_FILM_FAVOR_SUCCESS,

  READ_BRANCH_PENDING,
  READ_BRANCH_FAILURE,
  READ_BRANCH_SUCCESS,

  READ_SCHEDULE_PENDING,
  READ_SCHEDULE_FAILURE,
  READ_SCHEDULE_SUCCESS,

  READ_USER_SUCCESS,
  READ_USER_FAILURE,
  READ_USER_PENDING,

  CREATE_USER_SUCCESS,
  CREATE_USER_PENDING,
  CREATE_USER_FAILURE,

  UPDATE_USER_SUCCESS,
  UPDATE_USER_PENDING,
  UPDATE_USER_FAILURE,

  READ_PROMOTION_PENDING,
  READ_PROMOTION_FAILURE,
  READ_PROMOTION_SUCCESS,

  READ_PROMOTION_BOOK_TICKET_PENDING,
  READ_PROMOTION_BOOK_TICKET_FAILURE,
  READ_PROMOTION_BOOK_TICKET_SUCCESS,

  READ_TYPEPAYMENT_PENDING,
  READ_TYPEPAYMENT_FAILURE,
  READ_TYPEPAYMENT_SUCCESS,

  READ_BILL_PENDING,
  READ_BILL_FAILURE,
  READ_BILL_SUCCESS,

  CREATE_BILL_PENDING,
  CREATE_BILL_FAILURE,
  CREATE_BILL_SUCCESS
} from "../config/ActionType";

export function LogIn(user) {
  return { type: LOG_IN, user };
}
export function LogOut() {
  return { type: LOG_OUT };
}


//category
export function readCategoryPending() {
  return { type: READ_CATEGORY_PENDING };
}
export function readCategorySuccess(data) {
  return { type: READ_CATEGORY_SUCCESS, data };
}
export function readCategoryFailure(error) {
  return { type: READ_CATEGORY_FAILURE, error };
}
//film
//read
export function readFilmPending() {
  return { type: READ_FILM_PENDING };
}
export function readFilmSuccess(data) {
  return { type: READ_FILM_SUCCESS, data };
}
export function readFilmFailure(error) {
  return { type: READ_FILM_FAILURE, error };
}
//delete
export function deleteFilmPending() {
  return { type: DELETE_FILM_PENDING };
}
export function deleteFilmSuccess(data) {
  return { type: DELETE_FILM_SUCCESS, data };
}
export function deleteFilmFailure(error) {
  return { type: DELETE_FILM_FAILURE, error };
}
//create
export function createFilmPending() {
  return { type: CREATE_FILM_PENDING };
}
export function createFilmSuccess(data) {
  return { type: CREATE_FILM_SUCCESS, data };
}
export function createFilmFailure(error) {
  return { type: CREATE_FILM_FAILURE, error };
}
//update
export function updateFilmPending() {
  return { type: UPDATE_FILM_PENDING };
}
export function updateFilmSuccess(data) {
  return { type: UPDATE_FILM_SUCCESS, data };
}
export function updateFilmFailure(error) {
  return { type: UPDATE_FILM_FAILURE, error };
}

//--film

//user - fim favor
export function readUserFilmFavorPending() {
  return { type: READ_USER_FILM_FAVOR_PENDING };
}
export function readUserFilmFavorSuccess(data) {
  return { type: READ_USER_FILM_FAVOR_SUCCESS, data };
}
export function readUserFilmFavorFailure(error) {
  return { type: READ_USER_FILM_FAVOR_FAILURE, error };
}
//--user - fim favor

//branch
export function readBranchPending() {
  return { type: READ_BRANCH_PENDING };
}
export function readBranchSuccess(data) {
  return { type: READ_BRANCH_SUCCESS, data };
}
export function readBranchFailure(error) {
  return { type: READ_BRANCH_FAILURE, error };
}
//--branch

//schedule
export function readSchedulePending() {
  return { type: READ_SCHEDULE_PENDING };
}
export function readScheduleSuccess(data) {
  return { type: READ_SCHEDULE_SUCCESS, data };
}
export function readScheduleFailure(error) {
  return { type: READ_SCHEDULE_FAILURE, error };
}
//--schedule

//promotion
export function readPromotionPending() {
  return { type: READ_PROMOTION_PENDING };
}
export function readPromotionSuccess(data) {
  return { type: READ_PROMOTION_SUCCESS, data };
}
export function readPromotionFailure(error) {
  return { type: READ_PROMOTION_FAILURE, error };
}
//=======get single promotion on book ticket =====
export function readPromotionBookTicketPending() {
  return { type: READ_PROMOTION_BOOK_TICKET_PENDING };
}
export function readPromotionBookTicketSuccess(data) {
  return { type: READ_PROMOTION_BOOK_TICKET_SUCCESS, data };
}
export function readPromotionBookTicketFailure(error) {
  return { type: READ_PROMOTION_BOOK_TICKET_FAILURE, error };
}
//--promotion

// type payment
export function readTypePaymentPending() {
  return { type: READ_TYPEPAYMENT_PENDING };
}
export function readTypePaymentSuccess(data) {
  return { type: READ_TYPEPAYMENT_SUCCESS, data };
}
export function readTypePaymentFailure(error) {
  return { type: READ_TYPEPAYMENT_FAILURE, error };
}
//-- type payment

//bill
//post
export function createBillPending() {
  return { type: CREATE_BILL_PENDING };
}
export function createBillSuccess(data) {
  return { type: CREATE_BILL_SUCCESS, data };
}
export function createBillFailure(error) {
  return { type: CREATE_BILL_FAILURE, error };
}
//get
export function readBillPending() {
  return { type: READ_BILL_PENDING };
}
export function readBillSuccess(data) {
  return { type: READ_BILL_SUCCESS, data };
}
export function readBillFailure(error) {
  return { type: READ_BILL_FAILURE, error };
}
//--bill
// user
export function readUserPending() {
  return { type: READ_USER_PENDING };
}
export function readUserSuccess(data) {
  return { type: READ_USER_SUCCESS, data };
}
export function readUserFailure(error) {
  return { type: READ_USER_FAILURE, error };
}

//create user
export function CreateUsersLoading() {
  return { type: CREATE_USER_PENDING }
}
export function CreateUsersSuccess(user) {
  return { type: CREATE_USER_SUCCESS, user }
}
export function CreateUsersError(error) {
  return { type: CREATE_USER_FAILURE, error }
}
//update user
export function UpdateUsersLoading() {
  return { type: UPDATE_USER_PENDING }
}
export function UpdateUsersSuccess(user) {
  return { type: UPDATE_USER_SUCCESS, user }
}
export function UpdateUsersError(error) {
  return { type: UPDATE_USER_FAILURE, error }
}
//end user

