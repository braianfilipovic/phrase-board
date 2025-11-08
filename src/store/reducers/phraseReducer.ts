import { PhraseAction, PhraseState } from "../../types/phraseTypes";

export function phraseReducer(
  state: PhraseState,
  action: PhraseAction
): PhraseState {
  switch (action.type) {
    case "POPULATE":
      return [...action.payload, ...state];
    case "ADD":
      return [action.payload, ...state];
    case "REMOVE":
      return state.filter((phrase) => phrase.id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}
