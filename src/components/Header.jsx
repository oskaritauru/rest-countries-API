import "../components/CSS/Header.css";
import { IoMoonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMoon } from "react-icons/io5";

const Header = ({ themeSwitch }) => {
  const navigate = useNavigate();
  const handleRefresh = () => {
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
    themeSwitch();
  };

  return (
    <header className="header">
      <h1 onClick={handleRefresh} style={{ cursor: "pointer" }}>
        Where in the world?
      </h1>
      <div className="theme-switcher">
        <button onClick={handleThemeSwitch}>
          {isDarkMode ? (
            <IoMoon className="theme-icon" />
          ) : (
            <IoMoonOutline className="theme-icon" />
          )}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
