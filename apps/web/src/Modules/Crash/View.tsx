import styles from "./Styles.module.css";

interface Props {
  error: unknown;
}

export var CrashView = ({ error }: Props) => (
  <div className={styles.root}>
    <h1>Initialization Error</h1>
    <pre>{error instanceof Error ? error.message : String(error)}</pre>
  </div>
);
