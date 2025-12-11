import type { PropsWithChildren } from "react";
import { HeaderAtom } from "@/ui/components/atoms/header/header.atom";
import styles from "./main.template.module.css";

export function MainTemplate({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <HeaderAtom cartItemCount={1} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
