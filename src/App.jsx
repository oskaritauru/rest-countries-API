import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./components/CountryPage";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [theme, setTheme] = useState("light");

  const fetchCountries = async (setCountries) => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountriesData(data);
      setCountries(data);
    } catch (error) {
      console.error("Countries not found", error);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    fetchCountries(setCountries);
  }, []);

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
