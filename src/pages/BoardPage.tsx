import styles from "./BoardPage.module.css";
import Header from "../components/Header.tsx";
import Loader from "../components/Loader.tsx";
import PhraseGrid from "../components/PhraseGrid.tsx";
import { useEffect, useMemo } from "react";
import useDebounce from "../hooks/useDebounce.ts";
import { useInput } from "../hooks/useInput.ts";
import { usePhrases } from "../hooks/usePhrases.ts";
import { useLoading } from "../hooks/useLoading.ts";
import { filterByText } from "../utils/filterByText.ts";

export default function BoardPage() {
  const { phrases } = usePhrases();
  const { input } = useInput();
  const debouncedInput = useDebounce(input, 600);
  const { loading, setLoading } = useLoading();

  const phrasesFiltered = useMemo(() => {
    if (!debouncedInput.trim()) return phrases;
    return filterByText(phrases, debouncedInput, (phrase) => phrase.phrase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases.length, debouncedInput]);

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

  return (
    <div className={styles.root}>
      <Header />
      {loading ? <Loader /> : <PhraseGrid phrases={phrasesFiltered} />}
    </div>
  );
}
