import classes from './Header.module.css';
import { useState, useEffect } from "react";

import sun_icon from '../assets/icon-sun.svg';
import moom_icon from '../assets/icon-moon.svg';

export default function Header() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") ?? "light"
      );
    
      useEffect(() => {
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme:dark)").matches
        ) {
          setTheme("dark");
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.className = theme;
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };
  return (
    <header className={classes.header}>
      <h1>TODO</h1>
      <button onClick={toggleTheme}>
        <img src={theme === "light" ? moom_icon : sun_icon} alt="" />
      </button>
    </header>
  );
}
