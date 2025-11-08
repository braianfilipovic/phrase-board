import React from "react";
import styles from "./PhraseCard.module.css";

type OwnProps = {
  text: string;
  onRemove?: (text: string) => void;
};

const PhraseCard = React.memo(function PhraseCard({
  text,
  onRemove,
}: OwnProps) {
  return (
    <div className={styles.card} onClick={() => onRemove?.(text)}>
      <p>{text}</p>
    </div>
  );
});

export default PhraseCard;
