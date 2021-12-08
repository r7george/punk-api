import './App.scss';

import Main from './containers/Main/Main';

import React, {useState, useEffect} from 'react';
import Navbar from './containers/Navbar/Navbar';

const App = () => {
  const [beerArr, setBeerArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    return beerNameLC.includes(searchTerm);
  });

  return (
    <div className="App">
      <h1>Punk API</h1>
      <div className="page-content">
        <Navbar searchTerm={searchTerm} handleInput={handleInput} />
        <Main beerArr={filteredBeerArr} />
      </div>
    </div>
  );
}

export default App;
