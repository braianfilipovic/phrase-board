import { useContext } from "react";
import { AppContext } from "../store/context/AppContext.tsx";
import { toast } from "react-toastify";
import { getPhrases } from "../api/api.ts";
import { useIdGenerator } from "./useIdGenerator.ts";
import { Phrase } from "../types/appContextTypes.ts";
import { useLoading } from "./useLoading.ts";

export function usePhrases() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("usePhrases must be used within an AppProvider");
  }
  const { phrases, dispatch } = context;

  const generateId = useIdGenerator();
  const { setLoading } = useLoading();

  const addPhrase = (input: string) => {
    if (!input.trim()) {
      toast("The input is empty!");
      return;
    }
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
    if (!phrases.length) {
      toast("Nothing to clear");
      return;
    }
    dispatch({
      type: "CLEAR",
    });
    toast("Phrases cleared");
  };

  const populatePhrases = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  return { phrases, addPhrase, removePhrase, clearPhrases, populatePhrases };
}
