import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailCointainer';
import { HomeContainer } from './containers/HomeContainer';
import { Cart } from './components/CartComponent/Cart.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <section>
          <Route exact path='/' component={HomeContainer}/>
          <Route exact path='/category/:id' component={HomeContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart} />
        </section>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
