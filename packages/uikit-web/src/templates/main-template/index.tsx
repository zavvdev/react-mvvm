import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";

interface Props extends PropsWithChildren {}

export function MainTemplate({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}
