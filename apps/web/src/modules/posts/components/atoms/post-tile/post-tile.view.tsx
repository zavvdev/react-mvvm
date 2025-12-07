import styles from "./post-tile.module.css";

interface Props {
  title: string;
  body: string;
}

export const PostTile = ({ title, body }: Props) => {
  return (
    <div className={styles.root}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
