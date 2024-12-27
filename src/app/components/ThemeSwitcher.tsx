"use client";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ padding: "10px", margin: "20px" }}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeSwitcher;
