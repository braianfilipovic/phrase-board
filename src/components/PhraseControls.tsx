import Input from "./Input.tsx";
import { useInput } from "../hooks/useInput.ts";
import { usePhrases } from "../hooks/usePhrases.ts";
import styles from "./PhraseControls.module.css";
import Button from "./Button.tsx";
import { useRef } from "react";

export default function PhraseControls() {
  const { input, setInput } = useInput();
  const inputRef = useRef<HTMLInputElement>(null);
  const { addPhrase, clearPhrases, populatePhrases } = usePhrases();

  const onAddPhrase = () => {
    if (input.trim() === "") {
      inputRef.current?.focus();
    } else {
      setInput("");
      addPhrase(input);
    }
  };

  return (
    <div className={styles.searchContainter}>
      <Input
        id="phraseInput"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onEnter={onAddPhrase}
        placeholder="Search or add a new phrase…"
      />
      <Button onClick={onAddPhrase}>Add phase</Button>
      <Button type="outline" onClick={populatePhrases}>
        Add Lorem
      </Button>
      <Button type="outline" onClick={clearPhrases}>
        Clear all
      </Button>
    </div>
  );
}
