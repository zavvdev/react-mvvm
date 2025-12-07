import styles from "./post.module.css";

interface Props {
  title: string;
  body: string;
  onOpen: () => void;
}

export const Post = ({ title, body, onOpen }: Props) => (
  <div className={styles.root}>
    <h2>{title}</h2>
    <p>{body}</p>
    <button type="button" onClick={onOpen}>
      Open
    </button>
  </div>
);
