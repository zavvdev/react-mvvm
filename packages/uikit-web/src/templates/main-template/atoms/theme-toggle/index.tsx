import { useDeviceTheme } from "../../../../_utils/hooks/use-device-theme";
import styles from "./styles.module.css";

export const ThemeToggle = () => {
  const theme = useDeviceTheme();

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
