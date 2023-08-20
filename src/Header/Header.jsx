import classes from "./Header.module.css";
import { useState, useEffect } from "react";
import sun_icon from "../assets/icon-sun.svg";
import moon_icon from "../assets/icon-moon.svg";

//only need to check of this once
/* By moving the savedTheme logic outside the component,
 you're accessing localStorage and executing the matchMedia 
 query just once, when the module is first evaluated. This 
 reduces unnecessary computations on subsequent renders.*/
 
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

export default function Header() {
  const [theme, setTheme] = useState(savedTheme);

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
      <button onClick={toggleTheme} aria-label="Toggle theme">
        <img
          src={theme === "light" ? moon_icon : sun_icon}
          alt="Toggle to light mode"
        />
      </button>
    </header>
  );
}
