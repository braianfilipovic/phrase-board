import styles from "./BoardPage.module.css";
import Header from "../components/Header.tsx";
import Loader from "../components/Loader.tsx";
import PhraseGrid from "../components/PhraseGrid.tsx";
import useDebounce from "../hooks/useDebounce.ts";
import { useInput } from "../hooks/useInput.ts";
import { usePhrases } from "../hooks/usePhrases.ts";
import { useLoading } from "../hooks/useLoading.ts";
import { usePhraseFilter } from "../hooks/usePhraseFilter.ts";

export default function BoardPage() {
  const { loading } = useLoading();
  const { phrases } = usePhrases();
  const { input } = useInput();
  const debouncedInput = useDebounce(input, 600);
  const searchTerm = input === "" ? "" : debouncedInput;
  const phrasesFiltered = usePhraseFilter(phrases, searchTerm, input);

  return (
    <div className={styles.root}>
      <Header />
      {loading ? <Loader /> : <PhraseGrid phrases={phrasesFiltered} />}
    </div>
  );
}
