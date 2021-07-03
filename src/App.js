import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomeContainer} from './containers/HomeContainer.jsx';
import { useEffect, useState } from 'react';
import { getData } from './utils/getData';

function App() {
  
  const [products, setProducts] = useState ([]);

  useEffect( async () => {

    const processDB = async () => {
      let data =  await getData(10);
      let aux = data.map(e => {
        return {
          title: e.title,
          price: e.price,
          img: e.thumbnail,
          stock: e.available_quantity,
        }
      });
       setProducts(aux);
      }
      processDB();
    }, []);
    

  return (
      <div className='App'>
        <HomeContainer setProducts={products}/>
      </div>
  );
}

export default App;
