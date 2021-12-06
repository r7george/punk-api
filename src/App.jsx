import './App.scss';

import CardList from './components/CardList/CardList';
import beers from "./assets/data/beers";

const App = () => {
  const trialBeer = beers[0];
  console.log(trialBeer);
  return (
    <div className="App">
      <div>
        <CardList beerArray={beers} />
      </div>
      
    </div>
  );
}

export default App;
