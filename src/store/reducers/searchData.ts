import { ActionTypes, GET_MOVIES } from "../actions/types";

const initialState: GetMoviesDataType = {
  total: 0,
  page: 0,
  pages: 0,
  tv_shows: [],
};

const searchData = (
  state = initialState,
  action: ActionTypes
): GetMoviesDataType => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        total: action.releases.total,
        page: action.releases.page,
        pages: action.releases.pages,
        tv_shows: action.releases.tv_shows,
      };
  }
  return state;
};

export { searchData };
