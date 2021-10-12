import { createContext, FC, useContext, useEffect, useState } from "react";
import { Theme, themes } from "../themes";
type ThemeIndex = 0 | 1;

export type AppContextType = {
  theme: Theme;
  themeIndex: ThemeIndex;
  toggleTheme: () => void;
};

const initialValue: AppContextType = {
  theme: themes[0],
  themeIndex: 0,
  toggleTheme: () => {},
};

export const AppContext = createContext<AppContextType>(initialValue);

export const AppContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes[0]);
  const [themeIndex, setThemeIndex] = useState<ThemeIndex>(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.localStorage.getItem("dashboard-theme")) {
        const index = Number(window.localStorage.getItem("dashboard-theme"));
        setTheme(themes[index]);
        setThemeIndex(index as ThemeIndex);
      } else {
        const index = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? 0
          : 1;
        setTheme(themes[index]);
        setThemeIndex(index);
      }
    }
  }, []);

  const toggleTheme = () => {
    const next = themeIndex === 0 ? 1 : 0;
    setTheme(themes[next]);
    setThemeIndex(next);
    window.localStorage.setItem("dashboard-theme", next.toString());
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        themeIndex,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
