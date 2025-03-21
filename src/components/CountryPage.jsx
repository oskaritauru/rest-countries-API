import { useParams } from "react-router-dom";
import CountryDetail from "./CountryDetail";

function CountryPage({ countries }) {
  const { cca3 } = useParams();
  const country = countries.find((c) => c.cca3 === cca3);

  if (!country) return <div>Country not found</div>;

  const borderCountries = country.borders
    ? country.borders
        .map((borderCode) => {
          return countries.find((c) => c.cca3 === borderCode);
        })
        .filter(Boolean)
    : [];

  const languages = Object.values(country.languages).join(", ");
  const currencies = Object.values(country.currencies)
    .map((currency) => currency.name)
    .join(", ");

  const topLevelDomain = Array.isArray(country.tld)
    ? country.tld.join(", ")
    : "No top-level domain available.";

  const nativeName = country.name.nativeName
    ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
    : "No native name available.";

  const formattedPopulation = new Intl.NumberFormat("en-US").format(
    country.population
  );

  return (
    <CountryDetail
      imgSrc={country.flags.png}
      countryName={country.name.common}
      nativeName={nativeName}
      population={formattedPopulation}
      region={country.region}
      capital={country.capital}
      subRegion={country.subregion}
      topLevelDomain={topLevelDomain}
      currencies={currencies}
      languages={languages}
      borderCountries={borderCountries}
    />
  );
}

export default CountryPage;
