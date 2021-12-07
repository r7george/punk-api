import './App.scss';

import Main from './containers/Main/Main';

import React, {useState, useEffect} from 'react';

const App = () => {
  const [beerArr, setBeerArr] = useState([]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`).then((response) => {
      return response.json();
    }).then((beerObject) => {
      setBeerArr(beerObject);
    })
  }, [])

  return (
    <div className="App">
        <Main beerArr={beerArr} />
    </div>
  );
}

export default App;
