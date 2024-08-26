import './App.css';
import Greet from './greet';
import ParentComponent from './ParentComponent';
import Welcome from './welcome';
import UseStateArray from './UseStateArray';
import UseEffectFetch from './UseEffectFetch';

function App() {
  return (
    <div className="App">
      <Greet firstname="John" lastname="Doe" />
      <Welcome firstname="John" lastname="Doe" />
      <ParentComponent />
      <UseStateArray />
      <UseEffectFetch />
    </div>
  );
}

export default App;
