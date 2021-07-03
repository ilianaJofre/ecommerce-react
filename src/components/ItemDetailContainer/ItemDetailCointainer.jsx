import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail.jsx' 
import { getData } from '../../utils/getData.js';

export const ItemDetailContainer = () => {

    const [product, setProducts] = useState ([]);

    useEffect( async () => {

    const processDB = async () => {
      let data =  await getData(1);
      let aux = {
          title: data[0].title,
          price: data[0].price,
          img: data[0].thumbnail,
          stock: data[0].available_quantity,
        }
        console.log(aux)
       setProducts(aux);
      }
      processDB();
    }, []);
    return (
        <ItemDetail product = {product}/>
    )
}