import { Icons } from "../../../../../../icons";
import styles from "./styles.module.css";

interface Props {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.root}
    data-testid="close-button"
  >
    <Icons.X />
  </button>
);
