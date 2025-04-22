// Import useParams hook for accessing route parameters
import { useParams } from "react-router-dom";
import CountryDetail from "./CountryDetail";

// Define the CountryPage component that receives countries as a prop
function CountryPage({ countries }) {
  // Get the cca3 parameter from the URL
  const { cca3 } = useParams();
  // Find the country object that matches the cca3 code
  const country = countries.find((c) => c.cca3 === cca3);

  if (!country) return <div>Country not found</div>;

  // Get the bordering countries based on the borders array
  const borderCountries = country.borders
    ? country.borders
        .map((borderCode) => {
          // Find each bordering country by its cca3 code
          return countries.find((c) => c.cca3 === borderCode);
        })
        .filter(Boolean)
    : [];

  // Get the languages spoken in the country
  const languages = Object.values(country.languages).join(", ");
  // Get the names of the currencies used in the country
  const currencies = Object.values(country.currencies)
    .map((currency) => currency.name)
    .join(", ");

  // Get the top-level domain(s) for the country
  const topLevelDomain = Array.isArray(country.tld)
    ? country.tld.join(", ")
    : "No top-level domain available.";

  // Get the native name of the country
  const nativeName = country.name.nativeName
    ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
    : "No native name available.";

  // Format the population number with commas
  const formattedPopulation = new Intl.NumberFormat("en-US").format(
    country.population
  );

  // Render the CountryDetail component with the country's information
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
