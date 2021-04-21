import { createStore, combineReducers } from "redux";
import { movieData } from "./movieData";
import { searchData } from "./searchData";

const reducers = combineReducers({
  movieData,
  searchData,
});

const store = createStore(reducers);

export { store };
