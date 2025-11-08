import clsx from "clsx";
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

export default function Input({
  id,
  value,
  onChange,
  className,
  placeholder,
  type = "text",
  onEnter,
}: OwnProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnter?.();
    }
  };

  return (
    <input
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
