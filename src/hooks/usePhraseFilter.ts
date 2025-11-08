import { useContext, useEffect, useMemo } from "react";
import { AppContext } from "../store/context/AppContext.tsx";
import { useLoading } from "./useLoading.ts";
import { Phrase } from "../types/appContextTypes.ts";
import { filterByText } from "../utils/filterByText.ts";

export function usePhraseFilter(
  phrases: Phrase[],
  text: string,
  input: string
) {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("usePhraseFilter must be used within an AppProvider");
  }

  const { setLoading } = useLoading();

  const phrasesFiltered = useMemo(() => {
    if (!text.trim()) return phrases;
    return filterByText(phrases, text, (phrase) => phrase.phrase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases.length, text]);

  useEffect(() => {
    if (phrases.length && input) {
      setLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  useEffect(() => {
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrasesFiltered]);

  return phrasesFiltered;
}
