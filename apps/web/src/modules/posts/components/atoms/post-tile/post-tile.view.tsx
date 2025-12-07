import styles from "./post-tile.module.css";

interface Props {
  title: string;
  body: string;
  onOpen: () => void;
}

export const PostTile = ({ title, body, onOpen }: Props) => (
  <div className={styles.root}>
    <h2>{title}</h2>
    <p>{body}</p>
    <button type="button" onClick={onOpen}>
      Open
    </button>
  </div>
);
