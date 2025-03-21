import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./components/CountryPage";

function App() {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Countries not found", error);
      setError("Failed to load countries");
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const themeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header themeSwitch={themeSwitch} />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route
          path="/country/:cca3"
          element={<CountryPage countries={countries} />}
        />
      </Routes>
    </>
  );
}

export default App;
