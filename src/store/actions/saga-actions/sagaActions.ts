import { REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS } from "./sagaTypes";

const requestSuggestions = (search_target_text: string) => {
  return {
    type: REQUEST_SUGGESTIONS,
    search_target_text,
  };
};

const receiveSuggestions = (res_suggestions: GetMoviesDataType) => {
  return {
    type: RECEIVE_SUGGESTIONS,
    res_suggestions,
  };
};

export { requestSuggestions, receiveSuggestions };
