import { useContext } from "react";
import { AppContext } from "../store/context/AppContext.tsx";
import { toast } from "react-toastify";
import { getPhrases } from "../api/api.ts";
import { useIdGenerator } from "./useIdGenerator.ts";
export type Phrase = {
  id: string;
  phrase: string;
};
export function usePhrases() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("usePhrases must be used within an AppProvider");
  }
  const { phrases, dispatch } = context;
  const generateId = useIdGenerator();

  const addPhrase = (input: string) => {
    dispatch({
      type: "ADD",
      payload: { id: generateId(), phrase: input },
    });
    toast("Phrase added");
  };

  const removePhrase = (id: string) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
    toast("Phrase removed");
  };

  const clearPhrases = () => {
    dispatch({
      type: "CLEAR",
    });
    toast("Phrases cleared");
  };

  const populatePhrases = async () => {
    try {
      const phrases: Phrase[] = await getPhrases();
      const phrasesWithCustomId = phrases.map((phrase) => ({
        ...phrase,
        id: generateId(),
      }));
      dispatch({
        type: "POPULATE",
        payload: phrasesWithCustomId,
      });
      toast("Lorem phrases added");
    } catch (error) {
      toast("Failed loading lorem phrases");
    }
  };

  return { phrases, addPhrase, removePhrase, clearPhrases, populatePhrases };
}
