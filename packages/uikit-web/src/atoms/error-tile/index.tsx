import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";

interface Props extends PropsWithChildren {}

export const ErrorTile = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>;
};
