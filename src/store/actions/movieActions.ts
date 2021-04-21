const getMoviesData = (releases: GetMoviesDataType) => {
  return {
    type: "GET_MOVIES",
    releases,
  };
};

export { getMoviesData };
