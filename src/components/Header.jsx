import "../components/CSS/Header.css";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { IoMoon } from "react-icons/io5";

const Header = ({ themeSwitch }) => {
  return (
    <header className="header">
      <Link to="/">
        <h1>Where in the world?</h1>
      </Link>
      <div className="theme-switcher">
        <button onClick={themeSwitch}>
          <IoMoonOutline className="theme-icon" />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
