import React from "react";
import styles from "./PhraseCard.module.css";
import { usePhrases } from "../hooks/usePhrases.ts";

type OwnProps = {
  id: string;
  text: string;
};

const PhraseCard = React.memo(function PhraseCard({ id, text }: OwnProps) {
  const { removePhrase } = usePhrases();

  return (
    <div className={styles.card} onClick={() => removePhrase?.(id)}>
      <p>{text}</p>
    </div>
  );
});

export default PhraseCard;
