// Import CSS for styling the header component
import "../components/CSS/Header.css";
// Import icons for theme switching
import { IoMoonOutline, IoMoon } from "react-icons/io5";
// Import hooks for navigation and state management
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Define the Header component that receives a themeSwitch prop
const Header = ({ themeSwitch }) => {
  const navigate = useNavigate(); // Get the navigate function for programmatic navigation

  // Function to handle page refresh or navigation to the home page
  const handleRefresh = () => {
    if (window.location.pathname === "/") {
      window.location.reload(); // Reload the page if already on the home page
    } else {
      navigate("/"); // Navigate to the home page
    }
  };

  // State to manage dark mode and header visibility
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [isHeaderHidden, setIsHeaderHidden] = useState(false); // State for header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

  // Function to toggle dark mode and call the themeSwitch function
  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode state
    themeSwitch(); // Call the themeSwitch function passed as a prop
  };

  // Function to handle scroll events and hide/show the header
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsHeaderHidden(currentScrollY > lastScrollY && currentScrollY > 50);
    setLastScrollY(currentScrollY);
  };

  // Effect hook to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Render the header component
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
