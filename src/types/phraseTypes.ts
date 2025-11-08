import { Phrase } from "./appContextTypes";

export type PhraseState = Phrase[];

export type PhraseAction =
  | { type: "POPULATE"; payload: Phrase[] }
  | { type: "ADD"; payload: Phrase }
  | { type: "REMOVE"; payload: string }
  | { type: "CLEAR" };
