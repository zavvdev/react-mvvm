import type { PropsWithChildren } from "react";
import { DI } from "@/application/di/di";
import { HeaderAtom } from "@/ui/components/atoms/header/header.atom";
import styles from "@/ui/components/templates/main/main.template.module.css";

// You need to specify dependencies union type if you want to add custom props
// into component that is an injection target
export const MainTemplate = DI.withInjections<"cartUseCase", PropsWithChildren>(
  "cartUseCase",
)(({ cartUseCase, children }) => {
  const cart = cartUseCase.useCart();

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <HeaderAtom cartItemCount={cart.total} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
});
