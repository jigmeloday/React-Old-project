import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.util";
import ShopActionTypes from "./shop.type";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.action";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapShotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}
export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
