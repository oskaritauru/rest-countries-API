import "../components/CSS/CountryDetail.css";
import { Link } from "react-router-dom";

function CountryDetail({
  imgSrc,
  countryName,
  nativeName,
  population,
  region,
  capital,
  subRegion,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}) {
  return (
    <div className="CountryWrapper">
      <div className="CountryImg">
        <img src={imgSrc} alt={`${countryName} flag`} />
      </div>
      <div className="CountryInfo">
        <h2>{countryName}</h2>
        <p>
          Native Name: <span>{nativeName || "No native name available."}</span>
        </p>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Sub Region: <span>{subRegion}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
        <p>
          Top Level Domain:{" "}
          <span>{topLevelDomain || "No top-level domain available."}</span>
        </p>
        <p>
          Currencies: <span>{currencies || "No currencies available."}</span>
        </p>
        <p>
          Languages: <span>{languages || "No languages available."}</span>
        </p>
      </div>
      <h3>Border Countries:</h3>
      {borderCountries.length > 0 ? (
        <ul>
          {borderCountries.map((borderCountry) => (
            <li key={borderCountry.cca3}>
              <Link to={`/country/${borderCountry.cca3}`}>
                {borderCountry.name.common}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No border countries.</p>
      )}
    </div>
  );
}

export default CountryDetail;
