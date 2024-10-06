import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const HandleDarkMode = () => {
  // Get dark mode preference from localStorage if available
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  );

  // Add a useEffect to apply/remove the dark mode class and save the preference to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="fixed right-5 bottom-5 dark:bg-gray-800 dark:border-gray-700
      bg-white border border-gray-200 shadow p-2 rounded-full"
      onClick={toggleDarkMode}
      style={{ cursor: "pointer" }}
    >
      {darkMode ? (
        <MdLightMode className="size-7" />
      ) : (
        <MdDarkMode className="size-7" />
      )}
    </div>
  );
};

export default HandleDarkMode;
