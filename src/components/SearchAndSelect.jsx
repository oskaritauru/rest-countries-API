// Import React, hooks, CSS, icons, and navigation
import React, { useState } from "react";
import "../components/CSS/SearchAndSelect.css";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Define the SearchAndSelect component and its state variables
const SearchAndSelect = ({ countries, onSearchChange, onRegionChange }) => {
  const [search, setSearch] = useState(""); // State for search input
  const [isFocused, setIsFocused] = useState(false); // State for input focus
  const [selectedRegion, setSelectedRegion] = useState(""); // State for selected region
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  const navigate = useNavigate(); // Navigation function

  // Handle changes in the search input
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    onSearchChange(value);
  };

  // Handle changes in the selected region
  const handleRegionChange = (region) => {
    const formattedRegion = region.charAt(0).toUpperCase() + region.slice(1);
    setSelectedRegion(formattedRegion);
    onRegionChange(formattedRegion);
    setIsOpen(false);
  };

  // Toggle the dropdown options
  const toggleOptions = () => {
    setIsOpen((prev) => !prev); // Toggle the isOpen state
  };

  // Handle key down events in the search input
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Find the country that matches the search input
      const foundCountry = countries.find((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
      if (foundCountry) {
        // Navigate to the country page if a match is found
        navigate(`/country/${foundCountry.cca3}`);
      }
      event.preventDefault(); // Prevent the default form submission
    }
  };

  return (
    <form>
      <div className="search-options">
        {/* Search icon */}
        <IoMdSearch
          size={23}
          className={`search-icon ${isFocused ? "active" : ""}`}
        />
        {/* Search input field */}
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
        {/* Selected region display and dropdown toggle */}
        <div className="selected-region" onClick={toggleOptions}>
          {selectedRegion ? selectedRegion : "Filter by Region"}{" "}
          <IoIosArrowDown size={14} className="arrow-icon" />{" "}
        </div>
        {isOpen && ( // Render options if the dropdown is open
          <div className="options">
            {/* Region options */}
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
