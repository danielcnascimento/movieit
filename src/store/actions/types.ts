const GET_MOVIES = "GET_MOVIES";

interface IAction {
  releases: GetMoviesDataType;
  type: typeof GET_MOVIES;
}

export { GET_MOVIES };

export type ActionTypes = IAction;
