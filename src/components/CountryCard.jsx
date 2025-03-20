import "../components/CSS/CountryCard.css";

const CountryCard = ({ imgSrc, countryName, population, region, capital }) => {
  const formattedPopulation = new Intl.NumberFormat("en-US").format(population);

  return (
    <div className="card">
      <div className="img-card">
        <img className="country-img" src={imgSrc} alt="" />
      </div>
      <div className="detail-card">
        <h2 className="country-name">{countryName}</h2>
        <p className="population">
          Population: <span>{formattedPopulation}</span>
        </p>
        <p className="region">
          Region: <span>{region}</span>
        </p>
        <p className="capital">
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
