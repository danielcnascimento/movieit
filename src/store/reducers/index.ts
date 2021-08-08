import { createStore, combineReducers } from "redux";
import { movieData } from "./movieData";
// import { searchData } from "./searchData";

export const reducers = combineReducers({
  movieData,
});

const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;

export { store };
