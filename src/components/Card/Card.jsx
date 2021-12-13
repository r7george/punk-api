import React, {useState} from "react";
import "./Card.scss";

const Card = ({imgUrl, name, abv, ibu, ebc, tagline, description, foodPairing}) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  const cardJSX = (
    <>
      <img src={imgUrl} alt="beer card" className="card__image" />
      <h2 className="card__header">{name.toUpperCase()}
      </h2>
      <section className="card__info">
        <p className="card__alc-heading">ABV</p>
        <p className="card__alc-heading">IBU</p>
        <p className="card__alc-heading">EBC</p>
        <p className="card__alc-info">{abv}%</p>
        <p className="card__alc-info">{ibu}</p>
        <p className="card__alc-info">{ebc}</p>
      </section>
      <h4 className="card__tagline">{tagline}</h4>
    </>
  );

  const cardInfoJSX = (
    <div className="card__back">
      <h3 className="card__foodPair">Food pairings:</h3>
      <ul className="card__foodPair-text">
        {foodPairing.map((pair, index) => {
          return <li key={index}>{pair}</li>
        })}
      </ul>
      <h3 className="card__description">Description:</h3>
      <p className="card__description-text">{description}</p>
    </div>
  );

  return (
    <div className="card" onClick={handleClick}>
      {showInfo ? cardInfoJSX : cardJSX}
    </div>
  )
}

export default Card;