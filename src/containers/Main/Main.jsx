import React from "react";
import "./Main.scss";

import CardList from "../../components/CardList/CardList";

const Main = ({beerArr}) => {
  return (
    <CardList beerArray={beerArr}/>
  )
}

export default Main;