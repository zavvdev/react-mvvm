import type { PropsWithChildren } from "react";
import styles from "./main.module.css";
import { Header } from "@/_shared/ui/components/atoms/header/header";

export function MainTemplate({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <Header cartItemCount={1} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
