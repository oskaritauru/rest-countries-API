import { useParams } from "react-router-dom";
import CountryDetail from "./CountryDetail";

function CountryPage({ countries }) {
  const { cca3 } = useParams();
  const country = countries.find((c) => c.cca3 === cca3);

  if (!country) return <div>Country not found</div>;

  // const borderCountries = country.borders
  //   ? country.borders.map((borderCode) => {
  //       return countries.find((c) => c.cca3 === borderCode);
  //     })
  //   : [];

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
}

export default CountryPage;
