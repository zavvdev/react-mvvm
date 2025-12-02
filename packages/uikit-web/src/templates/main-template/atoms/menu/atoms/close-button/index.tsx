import { Icons } from "../../../../../../icons";
import styles from "./styles.module.css";

interface Props {
  onClick: () => void;
}

export var CloseButton = ({ onClick }: Props) => (
  <button type="button" onClick={onClick} className={styles.root}>
    <Icons.X />
  </button>
);
