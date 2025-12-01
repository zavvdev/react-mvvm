import type { PropsWithChildren } from "react";
import { useDeviceTheme } from "../../hooks/use-device-theme";
import styles from "./styles.module.css";

interface Props extends PropsWithChildren {
  footer?: React.ReactNode;
}

export var MainTemplate = ({ children, footer }: Props) => {
  var theme = useDeviceTheme();

  return (
    <div className={styles.root}>
      {children}
      <div className={styles.footer}>
        {!!footer && <div>{footer}</div>}
        <div>
          <button
            className={styles.themeSwitch}
            type="button"
            onClick={() => {
              theme.onChange(theme.value === "dark" ? "light" : "dark");
            }}
          >
            {theme.value === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
};
