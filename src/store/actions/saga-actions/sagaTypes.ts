const REQUEST_SUGGESTIONS = "REQUEST_SUGGESTION";
const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTION";

export interface ISagaActionRequest {
  search_target_text: string;
  type: typeof REQUEST_SUGGESTIONS;
}

export interface ISagaActionsReceive {
  res_suggestions: GetMoviesDataType;
  type: typeof RECEIVE_SUGGESTIONS;
}

export { REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS };

export type ActionTypes = ISagaActionRequest | ISagaActionsReceive;
