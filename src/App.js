import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomeContainer} from './containers/HomeContainer.jsx';

function App() {
  /*async function getData() {
    const response = await fetch ('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas');
    const data = await response.json();
    return data;
  }
  console.log(getData());*/
  return (
    <div className='App'>
      <HomeContainer />
    </div>
  );
}

export default App;
