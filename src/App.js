import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailCointainer';
import { HomeContainer } from './containers/HomeContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <section>
          <Route exact path='/' component={HomeContainer}/>
          <Route exact path='/category/:id' component={HomeContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />
        </section>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
