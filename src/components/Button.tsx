import clsx from "clsx";
import styles from "./Button.module.css";

type OwnProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: string;
};

export default function Button({
  children,
  onClick,
  className,
  type,
}: OwnProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, className, type && styles[type])}
    >
      {children}
    </button>
  );
}
