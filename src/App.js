import logo from './logo.svg';
import './App.css';
import Countries from './components/countries/Countries';
import Header from './components/Header/Header';
import './components/Header/header.css'
import './components/countries/countries.css'

function App() {
  return (
    <div className="App">
      <Header></Header>

      <h1>kicu ekta</h1>
      <Countries></Countries>
    </div>
  );
}

export default App;
