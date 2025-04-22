// Import necessary hooks and components from React and React Router
import { useState, useEffect } from "react";
import Header from "./components/Header"; // Import the Header component
import HomePage from "./components/HomePage"; // Import the HomePage component
import { Route, Routes } from "react-router-dom"; // Import Route and Routes for routing
import CountryPage from "./components/CountryPage"; // Import the CountryPage component

function App() {
  // State to hold the list of countries
  const [countries, setCountries] = useState([]);
  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);

  // Function to fetch countries from the REST Countries API
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Parse the JSON data
      setCountries(data); // Update the countries state with the fetched data
    } catch (error) {
      console.error("Countries not found", error);
      setError("Failed to load countries");
    }
  };

  // useEffect to fetch countries when the component mounts
  useEffect(() => {
    fetchCountries();
  }, []); // Empty dependency array means this runs once on mount

  // useEffect to toggle the dark class on the document element based on the theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Function to switch between light and dark themes
  const themeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header themeSwitch={themeSwitch} />{" "}
      {/* Render the Header component and pass the themeSwitch function as a prop */}
      <Routes>
        {/* Define routes for the application */}
        <Route path="/" element={<HomePage countries={countries} />} />{" "}
        {/* Home page route */}
        <Route
          path="/country/:cca3"
          element={<CountryPage countries={countries} />} // Country page route with dynamic parameter
        />
      </Routes>
    </>
  );
}

export default App;
