import "../components/CSS/CountryCard.css";

const CountryCard = (props) => {
  const { imgSrc, countryName, population, region, capital } = props;
  return (
    <div className="Card">
      <div className="ImgCard">
        <img className="CountryImg" src={imgSrc} alt="" />
      </div>
      <h2 className="CountryName">{countryName}</h2>
      <p className="Population">
        Population: <span>{population}</span>
      </p>
      <p className="Region">
        Region: <span>{region}</span>
      </p>
      <p className="Capital">
        Capital: <span>{capital}</span>
      </p>
    </div>
  );
};

export default CountryCard;
