// import { useNavigate } from "react-router-dom";
import "../components/CSS/CountryDetail.css";

function CountryDetail(props) {
  const {
    nativeName,
    imgSrc,
    countryName,
    population,
    region,
    capital,
    subRegion,
    currencies,
    languages,
  } = props;

  return (
    <div className="CountryWrapper">
      <div className="CountryImg">
        <img src={imgSrc} alt="" />
      </div>
      <div className="CountryInfo">
        <h2>{countryName}</h2>
        <p>
          Native Name: <span>{nativeName}</span>
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
      <div>
        <p>
          Currencies: <span>{currencies}</span>
        </p>
        <p>
          Languages:
          <span>{languages}</span>
        </p>
      </div>
      <h3>Border Countries:</h3>
    </div>
  );
}

export default CountryDetail;
