import React from "react";
import "./CardList.scss";

import Card from "../Card/Card";

const CardList = ({beerArray}) => {
  const cardJSX = beerArray.map((beer) => {
    return <Card key={beer.id} name={beer.name} abv={beer.abv} ibu={beer.ibu} ebc={beer.ebc} tagline={beer.tagline} imgUrl={beer.image_url} />
  });

  return (
    <div className="cardlist">
      {cardJSX}
    </div>
  )
}

export default CardList;