import React, { useState, useEffect } from "react";
import "../components/CSS/HomePage.css";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import SearchAndSelect from "./SearchAndSelect";

const HomePage = ({ countries }) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    const newFilteredCountries = countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesRegion = selectedRegion
        ? country.region.toLowerCase() === selectedRegion.toLowerCase()
        : true;
      return matchesSearch && matchesRegion;
    });
    setFilteredCountries(newFilteredCountries);
  }, [search, selectedRegion, countries]);

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  const handleRegionChange = (region) => {
    const formattedRegion = region.toLowerCase();
    setSelectedRegion(formattedRegion);
  };

  return (
    <main className="home-page">
      <SearchAndSelect
        countries={countries}
        onSearchChange={handleSearchChange}
        onRegionChange={handleRegionChange}
      />
      <div className="all-countries">
        {filteredCountries.map((country, index) => (
          <Link key={country.cca3} to={`/country/${country.cca3}`}>
            <CountryCard
              key={index}
              imgSrc={country.flags.png}
              countryName={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
