import logo from './logo.svg';
import './App.css';
import Nada from './Nada';
import Popup from './Popup';

function App() {


  return (
      <div className="App">
        <Nada />
        <Popup value={'hey im popup'}/>
      </div>
  );
}

export default App;
