import { useLayoutEffect, useState } from "react";

const THEME = {
  dark: "dark",
  light: "light",
};

type Theme = keyof typeof THEME;

const LC_KEY = "app-theme";

const getAppTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME.dark
    : THEME.light;

export const useDeviceTheme = () => {
  const { 0: theme, 1: setTheme } = useState(getAppTheme);

  useLayoutEffect(() => {
    const lcTheme = localStorage.getItem(LC_KEY) as Theme;

    if (lcTheme) {
      setTheme(lcTheme);
      return;
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(mq.matches ? THEME.dark : THEME.light);

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [setTheme]);

  useLayoutEffect(() => {
    document.body.setAttribute("class", theme);
  }, [theme]);

  return {
    value: theme as Theme,
    onChange: (newTheme: Theme) => {
      setTheme(newTheme);
      localStorage.setItem(LC_KEY, newTheme);
    },
  };
};
