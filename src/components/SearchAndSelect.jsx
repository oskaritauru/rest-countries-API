import React, { useState } from "react";
import "../components/CSS/SearchAndSelect.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchAndSelect = ({ countries, onSearchChange, onRegionChange }) => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    onSearchChange(value);
  };

  const handleRegionChange = (region) => {
    const formattedRegion = region.charAt(0).toUpperCase() + region.slice(1);
    setSelectedRegion(formattedRegion);
    onRegionChange(formattedRegion);
    setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const foundCountry = countries.find((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
      if (foundCountry) {
        navigate(`/country/${foundCountry.cca3}`);
      }
      event.preventDefault();
    }
  };

  return (
    <form>
      <div className="search-options">
        <IoMdSearch
          size={23}
          className={`search-icon ${isFocused ? "active" : ""}`}
        />
        <input
          placeholder="Search for a country..."
          type="text"
          name="countries"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <div className="select-options">
        <div className="selected-region" onClick={toggleOptions}>
          {selectedRegion ? selectedRegion : "Filter by Region"}
          <IoIosArrowDown size={14} className="arrow-icon" />
        </div>
        {isOpen && (
          <div className="options">
            <div
              onClick={() => handleRegionChange("africa")}
              className="option"
            >
              Africa
            </div>
            <div
              onClick={() => handleRegionChange("americas")}
              className="option"
            >
              America
            </div>
            <div onClick={() => handleRegionChange("asia")} className="option">
              Asia
            </div>
            <div
              onClick={() => handleRegionChange("europe")}
              className="option"
            >
              Europe
            </div>
            <div
              onClick={() => handleRegionChange("oceania")}
              className="option"
            >
              Oceania
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchAndSelect;
