import styles from "./styles.module.css";

interface Props {
  onClick: () => void;
}

export var BurgerButton = ({ onClick }: Props) => (
  <button type="button" className={styles.root} onClick={onClick}>
    <span />
    <span />
    <span />
  </button>
);
