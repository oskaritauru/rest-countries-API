import "../components/CSS/HomePage.css";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";

const HomePage = ({ countries }) => {
  return (
    <main className="HomePage">
      <form>
        <div className="SearchOptions">
          {/* <label htmlFor="countries">Country:</label> */}
          <IoMdSearch size={23} style={{ fill: "hsl(0, 0%, 52%)" }} />
          <input
            placeholder="Search for a country..."
            type="text"
            name="countries"
          />
        </div>
        <div className="SelectOptions">
          {/* <label htmlFor="regions">Filter by Region:</label> */}
          <select id="regions" name="regions">
            <option value="" selected disabled>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </form>

      <div className="AllCountries">
        {countries.map((country, index) => (
          <Link key={country} to={`/country/${country.fifa}`}>
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
