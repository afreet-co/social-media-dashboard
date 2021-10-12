import React from "react";
import { useAppContext } from "../contexts/AppContext";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme, themeIndex } = useAppContext();
  return (
    <div
      className={`h-5 w-10 ${
        theme.toggleBackground
      } rounded-full flex items-center cursor-pointer duration-150 transition-all ${
        themeIndex === 0 ? "justify-start" : "justify-end"
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`${theme.toggleButton} h-4 w-4 rounded-full duration-150 transition-all m-0.5`}
      ></div>
    </div>
  );
};
