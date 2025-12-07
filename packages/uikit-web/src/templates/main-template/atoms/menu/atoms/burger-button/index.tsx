import styles from "./styles.module.css";

interface Props {
  onClick: () => void;
}

export const BurgerButton = ({ onClick }: Props) => (
  <button
    type="button"
    className={styles.root}
    onClick={onClick}
    data-testid="burger-button"
  >
    <span />
    <span />
    <span />
  </button>
);
