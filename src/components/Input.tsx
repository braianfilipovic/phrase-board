import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./Input.module.css";

type OwnProps = {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  onEnter?: () => void;
};

const Input = forwardRef<HTMLInputElement, OwnProps>(
  (
    { id, value, onChange, className, placeholder, type = "text", onEnter },
    ref
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onEnter?.();
      }
    };

    return (
      <input
        ref={ref}
        id={id}
        value={value}
        onChange={onChange}
        className={clsx(className, styles.input)}
        type={type}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
