import "../components/CSS/Header.css";
import { IoMoonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
    themeSwitch();
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsHeaderHidden(currentScrollY > lastScrollY && currentScrollY > 50);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isHeaderHidden ? "hidden" : ""}`}>
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
