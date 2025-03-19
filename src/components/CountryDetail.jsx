import "../components/CSS/CountryDetail.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

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
    <>
      <div className="return-button">
        <Link to={`/`}>
          <IoIosArrowRoundBack size={30} className="fa-arrow" />
          <span>Back</span>
        </Link>
      </div>
      <div className="country-wrapper">
        <div className="country-img">
          <img src={imgSrc} alt={`${countryName} flag`} />
        </div>
        <div className="country-info">
          <h2>{countryName}</h2>
          <div className="left-info">
            <p>
              Native Name:{" "}
              <span>{nativeName || "No native name available."}</span>
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
          </div>
          <div className="right-info">
            <p>
              Top Level Domain:{" "}
              <span>{topLevelDomain || "No top-level domain available."}</span>
            </p>
            <p>
              Currencies:{" "}
              <span>{currencies || "No currencies available."}</span>
            </p>
            <p>
              Languages: <span>{languages || "No languages available."}</span>
            </p>
          </div>
        </div>
        <div className="border-countries">
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
      </div>
    </>
  );
}

export default CountryDetail;
