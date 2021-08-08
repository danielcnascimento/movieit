import { all } from "redux-saga/effects";
import { watcherSaga } from "./task-saga";

export function* rootSaga() {
  yield all([watcherSaga()]);
}
