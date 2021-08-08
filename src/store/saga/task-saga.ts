import {
  ISagaActionRequest,
  REQUEST_SUGGESTIONS,
} from "../actions/saga-actions/sagaTypes";
import { takeEvery, call, put, delay } from "redux-saga/effects";
import { loadSearch } from "../../services/api";
import { receiveSuggestions } from "../actions/saga-actions/sagaActions";

function* getSuggestions({
  search_target_text,
}: ISagaActionRequest): Generator<any, any, GetMoviesDataType> {
  yield delay(2000);
  const result = yield call(loadSearch, search_target_text);
  yield put(receiveSuggestions(result));
}

// TODO: add watchers
export function* watcherSaga() {
  yield takeEvery(REQUEST_SUGGESTIONS, getSuggestions);
}
