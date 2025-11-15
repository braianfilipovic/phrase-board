import { useContext, useEffect, useMemo, useRef } from "react";
import { AppContext } from "../store/context/AppContext.tsx";
import { useLoading } from "./useLoading.ts";
import { Phrase } from "../types/appContextTypes.ts";
import { filterByText } from "../utils/filterByText.ts";

export function usePhrasesFilter(
  phrases: Phrase[],
  text: string,
  input: string
) {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("usePhrasesFilter must be used within an AppProvider");
  }

  const { loading, setLoading } = useLoading();
  const noResultsTextRef = useRef<string | null>("");

  const phrasesFiltered = useMemo(() => {
    const trimmed = text.trim();

    //Empty text, return all phrases.
    if (!trimmed) {
      noResultsTextRef.current = null;
      return phrases;
    }

    //If the previous text was a prefix of the current one and the previous result was empty, there’s no need to filter again.
    if (
      noResultsTextRef.current &&
      trimmed.startsWith(noResultsTextRef.current)
    ) {
      return [];
    }

    const result = filterByText(phrases, trimmed, (p) => p.text);
    if (result.length === 0) {
      noResultsTextRef.current = trimmed;
    }
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases.length, text]);

  useEffect(() => {
    if (!loading && phrases.length && input) {
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
