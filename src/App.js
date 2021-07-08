import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { BarraNav } from './components/NavBar/NavBar.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailCointainer';
import { HomeContainer } from './containers/HomeContainer';
import { Cart } from './components/CartComponent/Cart.jsx';
import { notFound } from './components/404.jsx'

function App() {
  return (
    <BrowserRouter>
      <BarraNav />
      <section>
        <Switch>
          <Route exact path='/' component={HomeContainer}/>
          <Route exact path='/category/:id' component={HomeContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/notfound' component={notFound} />
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
