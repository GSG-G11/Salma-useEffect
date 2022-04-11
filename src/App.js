import ChangeColor from './components/ChangeColor';
import Counter from './components/Counter';
import Robohash from './components/Robohash';
import RandomUser from './components/RandomUser';
import Giphy from './components/Giphy';

function App() {
  return (
    <div className="App">
      <Counter />
      <ChangeColor />
      <Giphy />
      <Robohash />
      <RandomUser />
    </div>
  );
}

export default App;
