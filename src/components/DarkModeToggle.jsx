import React from "react";
import styles from "../styles/DarkMode.module.css";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button 
      className={`${styles.toggleButton} ${
        darkMode ? styles.dark : styles.light
      }`}
      onClick={() => setDarkMode((dark) => !dark)}
    >
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;