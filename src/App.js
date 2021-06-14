import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar.jsx';
import {ItemListContainers} from './containers/ItemListContainers.jsx';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainers />
    </div>
  );
}

export default App;
