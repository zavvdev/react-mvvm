import { useDeviceTheme } from "../../../../hooks/use-device-theme";
import styles from "./styles.module.css";

export var ThemeToggle = () => {
  var theme = useDeviceTheme();

  return (
    <button
      className={styles.root}
      type="button"
      onClick={() => {
        theme.onChange(theme.value === "dark" ? "light" : "dark");
      }}
    >
      {theme.value === "dark" ? "🌙" : "☀️"}
    </button>
  );
};
