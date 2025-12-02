import type { PropsWithChildren } from "react";
import { Menu } from "./atoms/menu";
import { ThemeToggle } from "./atoms/theme-toggle";
import styles from "./styles.module.css";
import type { MenuItem } from "./types";

interface Props extends PropsWithChildren {
  menu: Array<MenuItem>;
}

export var MainTemplate = ({ children, menu }: Props) => (
  <div className={styles.root}>
    {children}
    <div className={styles.footer}>
      <ThemeToggle />
      <Menu items={menu} />
    </div>
  </div>
);
