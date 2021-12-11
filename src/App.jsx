import './App.scss';

import Main from './containers/Main/Main';

import React, {useState, useEffect} from 'react';
import Navbar from './containers/Navbar/Navbar';

import brewdogLogo from "./assets/images/image-asset.png";

const App = () => {
  const [beerArr, setBeerArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isHighAbv, setIsHighAbv] = useState(false);
  const [isClassic, setIsClassic] = useState(false);
  const [isHighAcidity, setIsHighAcidity] = useState(false);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`).then((response) => {
      return response.json();
    }).then((beerObject) => {
      setBeerArr(beerObject);
    })
  }, []);

  const handleInput = (event) => {
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
  }


  const filteredBeerArr = beerArr.filter((beer) => {
    const beerNameLC = beer.name.toLowerCase();
    const isSearched = beerNameLC.includes(searchTerm);
    const hasHighAbv = isHighAbv && beer.abv;
    const isOldBeer = isClassic && beer.first_brewed;
    const hasHighPh = isHighAcidity && beer.ph;

    const highAbvBeer = beer.abv > 6;
    const classicBeer = Number(beer.first_brewed.slice(3)) < 2010;
    const acidicBeer = beer.ph < 4;
    
    // logic for filtering the beerArr
    if (hasHighAbv && !isOldBeer && !hasHighPh) {
      return highAbvBeer && isSearched;
    } 
    else if (isOldBeer && !hasHighPh && !hasHighAbv) {
      return classicBeer && isSearched;
    } 
    else if (hasHighPh && !hasHighAbv && !isOldBeer) {
      return acidicBeer && isSearched;
    } 
    else if (hasHighAbv && isOldBeer && !hasHighPh) {
      return highAbvBeer && classicBeer && isSearched;
    }
    else if (hasHighAbv && hasHighPh && !isOldBeer) {
      return highAbvBeer && acidicBeer && isSearched;
    }
    else if (isOldBeer && hasHighPh && !hasHighAbv) {
      return classicBeer && acidicBeer && isSearched;
    }
    else if (hasHighAbv && isOldBeer && hasHighPh) {
      return highAbvBeer && classicBeer && acidicBeer && isSearched;
    }

    const beerSearchTermArr = beerNameLC.includes(searchTerm)
    return beerSearchTermArr;
  });


  const handleChange = (event) => {
    if (event.target.id === "abv") {
      setIsHighAbv(!isHighAbv);
    } else if (event.target.id === "classic") {
      setIsClassic(!isClassic);
    } else if (event.target.id === "acidity") {
      setIsHighAcidity(!isHighAcidity);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__heading">Punk</h1>
        <img src={brewdogLogo} alt="" className="header__img" />
        <h1 className="header__heading">API</h1>
      </header>
      <div className="page-content">
        <Navbar searchTerm={searchTerm} handleInput={handleInput} handleChange={handleChange} />
        <Main beerArr={filteredBeerArr} />
      </div>
    </div>
  );
}

export default App;
