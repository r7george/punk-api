import React from "react";
import "./CardList.scss";

import Card from "../Card/Card";

const CardList = ({beerArray}) => {
  const cardJSX = beerArray.map((beer) => {
    return <Card key={beer.id} name={beer.name} abv={beer.abv} ibu={beer.ibu} ebc={beer.ebc} tagline={beer.tagline} imgUrl={beer.image_url} description={beer.description} foodPairing={beer.food_pairing} />
  });

  return (
    <div className="cardlist">
      {beerArray.length > 0 ? cardJSX : <h2 className="cardlist__heading">No beers available</h2>}
    </div>
  )
}

export default CardList;