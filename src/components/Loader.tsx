import clsx from "clsx";
import styles from "./Loader.module.css";

export default function Loader() {
  return <span className={clsx(styles.loader)} />;
}
