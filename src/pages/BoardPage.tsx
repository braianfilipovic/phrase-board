import styles from "./BoardPage.module.css";
import Header from "../components/Header.tsx";
import PhraseGrid from "../components/PhraseGrid.tsx";

export default function BoardPage() {
  return (
    <div className={styles.root}>
      <Header />
      <PhraseGrid />
    </div>
  );
}
