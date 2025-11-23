import styles from "./ErrorStyles.module.css";

interface ErrorViewProps {
  error: unknown;
}

export var ErrorView = ({ error }: ErrorViewProps) => (
  <div className={styles.root}>
    <h1>Initialization Error</h1>
    <pre>{error instanceof Error ? error.message : String(error)}</pre>
  </div>
);
