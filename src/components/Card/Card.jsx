import React from "react";
import "./Card.scss";

const Card = ({imgUrl, name, abv, ibu, ebc, tagline}) => {
  return (
    <div className="cardlist__card">
      <img src={imgUrl} alt="beer card" className="cardlist__card-image" />
      <h2 className="cardlist__card-header">{name.toUpperCase()}
      </h2>
      <section className="cardlist__card-info">
        <p className="heading">ABV</p>
        <p className="heading">IBU</p>
        <p className="heading">EBC</p>
        <p className="info">{abv}%</p>
        <p className="info">{ibu}</p>
        <p className="info">{ebc}</p>
      </section>
      <h4 className="cardlist__card-subheader">{tagline}</h4>
    </div>
  )
}

export default Card;