import { useState } from "react";
import type { MenuItem } from "../../types";
import { BurgerButton } from "./atoms/burger-button";
import { CloseButton } from "./atoms/close-button";
import { MenuItem as MenuItemComponent } from "./atoms/menu-item";
import styles from "./styles.module.css";

interface Props {
  items: Array<MenuItem>;
}

export var Menu = ({ items }: Props) => {
  var { 0: isOpen, 1: setIsOpen } = useState(false);

  return (
    <>
      <BurgerButton onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuItems}>
            {items
              .filter((item) => item.isVisible)
              .map((item) => (
                <MenuItemComponent key={item.id} onClick={item.onClick}>
                  {item.label}
                </MenuItemComponent>
              ))}
          </div>
          <CloseButton onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};
