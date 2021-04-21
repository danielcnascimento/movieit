const GET_MOVIES = "GET_MOVIES";

interface Action {
  releases: GetMoviesDataType;
  type: typeof GET_MOVIES;
}

export { GET_MOVIES };

export type ActionTypes = Action;
