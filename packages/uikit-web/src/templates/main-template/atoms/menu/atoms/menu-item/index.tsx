import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";

interface Props extends PropsWithChildren {
  onClick: () => void;
}

export var MenuItem = ({ children, onClick }: Props) => (
  <button type="button" className={styles.root} onClick={onClick}>
    {children}
  </button>
);
