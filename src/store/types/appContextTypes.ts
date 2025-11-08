import { PhraseAction } from "./phraseTypes";

export type Phrase = {
  id: string;
  phrase: string;
};
export interface AppContextType {
  phrases: Phrase[];
  dispatch: React.Dispatch<PhraseAction>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}
