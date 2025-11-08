import { PhraseAction } from "./phraseTypes";

export type Phrase = {
  id: string;
  text: string;
};

export interface AppContextType {
  phrases: Phrase[];
  dispatch: React.Dispatch<PhraseAction>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
