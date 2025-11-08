import styles from "./PhraseGrid.module.css";
import { usePhrases } from "../hooks/usePhrases.ts";
import PhraseCard from "./PhraseCard.tsx";
import { useInput } from "../hooks/useInput.ts";
import { useMemo } from "react";
import useDebounce from "../hooks/useDebounce.ts";
import { filterByText } from "../utils/filterByText.ts";
import { Phrase } from "../store/types/appContextTypes.ts";

export default function PhraseGrid() {
  const { phrases, removePhrase } = usePhrases();
  const { input } = useInput();
  const debouncedInput = useDebounce(input, 700, "");
  
  const phrasesFiltered = useMemo(() => {
    if (!debouncedInput.trim()) return phrases;
    return filterByText(phrases, debouncedInput, (phrase) => phrase.phrase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases.length, debouncedInput]);

  return (
    <section className={styles.cardContainer}>
      {phrasesFiltered.map((phrase: Phrase) => (
        <PhraseCard
          key={phrase.id}
          text={phrase.phrase}
          onRemove={removePhrase}
        />
      ))}
    </section>
  );
}
