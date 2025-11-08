import styles from "./PhraseGrid.module.css";
import PhraseCard from "./PhraseCard.tsx";
import { Phrase } from "../types/appContextTypes.ts";

type OwnProps = {
  phrases?: Phrase[];
};

export default function PhraseGrid({ phrases = [] }: OwnProps) {
  return (
    <section className={styles.cardContainer}>
      {phrases.map((phrase: Phrase) => (
        <PhraseCard key={phrase.id} id={phrase.id} text={phrase.phrase} />
      ))}
    </section>
  );
}
