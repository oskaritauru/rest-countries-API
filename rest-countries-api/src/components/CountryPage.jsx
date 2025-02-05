import { useParams } from "react-router-dom";
import CountryDetail from "./CountryDetail";

const CountryPage = ({ countries }) => {
  const { fifa } = useParams();
  const country = countries.find((item) => item.fifa === fifa);

  if (!country) {
    return <p>Country not found.</p>;
  }

  return (
    <div>
      <CountryDetail
        imgSrc={country.flags.png}
        countryName={country.name.common}
        nativeName={country.nativeName}
        population={country.population}
        region={country.region}
        capital={country.capital}
        subRegion={country.subregion}
        currencies={country.currencies[0]?.name}
        languages={country.languages[0]?.name}
        borderCountries={country.borders}
      />
    </div>
  );
};

export default CountryPage;
