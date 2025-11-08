import styles from "./Header.module.css";
import PhraseControls from "./PhraseControls.tsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>📌 Phrase Board</h1>
        <p>
          Save your favorite phrases on this board. Click on them to remove
          whenever you want.
        </p>
      </div>
      <PhraseControls />
    </header>
  );
}
