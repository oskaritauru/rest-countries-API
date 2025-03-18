import { useState } from "react";
import "../components/CSS/HomePage.css";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";

const HomePage = ({ countries }) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRegion = selectedRegion
      ? country.region.toLowerCase() === selectedRegion
      : true;
    return matchesSearch && matchesRegion;
  });

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <main className="home-page">
      <form>
        <div className="search-options">
          <IoMdSearch size={23} style={{ fill: "hsl(0, 0%, 52%)" }} />
          <input
            placeholder="Search for a country..."
            type="text"
            name="countries"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="select-options">
          <select
            id="regions"
            name="regions"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="" disabled>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </form>

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
