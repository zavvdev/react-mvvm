import { useLayoutEffect, useState } from "react";

var THEME = {
  dark: "dark",
  light: "light",
};

type Theme = keyof typeof THEME;

var LC_KEY = "app-theme";

var getAppTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME.dark
    : THEME.light;

export var useDeviceTheme = () => {
  var [theme, setTheme] = useState(getAppTheme);

  useLayoutEffect(() => {
    var lcTheme = localStorage.getItem(LC_KEY) as Theme;

    if (lcTheme) {
      setTheme(lcTheme);
      return;
    }

    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = () => setTheme(mq.matches ? THEME.dark : THEME.light);

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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
