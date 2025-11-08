import React from "react";
import styles from "./PhraseCard.module.css";

type OwnProps = {
  id: string;
  text: string;
  onRemove?: (id: string) => void;
};

const PhraseCard = React.memo(function PhraseCard({
  id,
  text,
  onRemove,
}: OwnProps) {
  return (
    <div className={styles.card} onClick={() => onRemove?.(id)}>
      <p>{text}</p>
    </div>
  );
});

export default PhraseCard;
