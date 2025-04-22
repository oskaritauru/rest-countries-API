// Import React, hooks, CSS, routing, and components
import React, { useState, useEffect } from "react";
import "../components/CSS/HomePage.css";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import SearchAndSelect from "./SearchAndSelect";

// Define the HomePage component that receives the countries prop
const HomePage = ({ countries }) => {
  // State management for search term and selected region
  const [search, setSearch] = useState(""); // Search term
  const [selectedRegion, setSelectedRegion] = useState(""); // Selected region
  const [filteredCountries, setFilteredCountries] = useState(countries); // Filtered countries

  // Effect hook that filters countries based on search term and region
  useEffect(() => {
    const newFilteredCountries = countries.filter((country) => {
      // Check if the country matches the search term
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      // Check if the country matches the selected region
      const matchesRegion = selectedRegion
        ? country.region.toLowerCase() === selectedRegion.toLowerCase()
        : true;
      // Return true if the country matches both the search term and region
      return matchesSearch && matchesRegion;
    });
    setFilteredCountries(newFilteredCountries); // Update filtered countries
  }, [search, selectedRegion, countries]); // Effect runs when search term, region, or countries change

  // Handle changes to the search term
  const handleSearchChange = (newSearch) => {
    setSearch(newSearch); // Update search term
  };

  // Handle changes to the selected region
  const handleRegionChange = (region) => {
    const formattedRegion = region.toLowerCase(); // Format region to lowercase
    setSelectedRegion(formattedRegion); // Update selected region
  };

  // Render the component
  return (
    <main className="home-page">
      <SearchAndSelect
        countries={countries} // Pass countries to SearchAndSelect component
        onSearchChange={handleSearchChange} // Pass search change handler
        onRegionChange={handleRegionChange} // Pass region change handler
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
