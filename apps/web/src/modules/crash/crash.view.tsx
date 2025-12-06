import styles from "./crash.module.css";

interface Props {
  error: unknown;
}

export var Crash = ({ error }: Props) => (
  <div className={styles.root}>
    <h1>Application Crashed</h1>
    <pre>
      {error instanceof Error ? error.message : JSON.stringify(error, null, 2)}
    </pre>
  </div>
);
