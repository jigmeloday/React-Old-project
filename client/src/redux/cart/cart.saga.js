import { takeLatest, all, call, put } from "redux-saga/effects";
import UserActionTypes from "../user/user.type";
import { clearCart } from "./cart.action";

export function* clearCartOnSIgnOutSuccess() {
  yield put(clearCart());
}
export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSIgnOutSuccess);
}
export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
