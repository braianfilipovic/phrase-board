import { PhraseAction, PhraseState } from "../types/phraseTypes";

export function phraseReducer(
  state: PhraseState,
  action: PhraseAction
): PhraseState {
  switch (action.type) {
    case "POPULATE":
      return [...action.payload, ...state];
    case "ADD":
      if (!action.payload.phrase.trim()) return state;
      return [action.payload, ...state];
    case "REMOVE":
      return state.filter((P) => P.phrase !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}
