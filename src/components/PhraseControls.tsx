import Input from "./Input.tsx";
import { useInput } from "../hooks/useInput.ts";
import { usePhrases } from "../hooks/usePhrases.ts";
import styles from "./PhraseControls..module.css";
import Button from "./Button.tsx";

export default function PhraseControls() {
  const { input, setInput } = useInput();
  const { addPhrase, clearPhrases, populatePhrases } = usePhrases();
  const onAddPhrase = () => {
    addPhrase(input);
    setInput("");
  };
  return (
    <div className={styles.searchContainter}>
      <Input
        id="phraseInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onEnter={onAddPhrase}
        placeholder="Search or add a new phrase…"
      />
      <Button onClick={onAddPhrase}>Add phase</Button>
      <Button type="outline" onClick={populatePhrases}>
        Inspiration
      </Button>
      <Button type="outline" onClick={clearPhrases}>
        Clean all
      </Button>
    </div>
  );
}
