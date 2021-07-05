import { getData } from '../utils/getData.js';
import { useEffect, useState } from 'react';
import { ItemListContainers } from '../components/ComponentItemList/ItemListContainers.jsx';
import { useParams } from 'react-router-dom';

export const HomeContainer = ({}) => {
    const params=useParams();
    const [products, setProducts] = useState ([]);

    useEffect( async () => {
      const processDB = async () => {
        let data =  await getData(params.id);
        let aux = data.map(e => {
          return {
            title: e.title,
            price: e.price,
            img: e.thumbnail,
            stock: e.available_quantity,
            id: e.id,
          }
        });
         setProducts(aux);
        }
        processDB();
      }, [params]);
    return (
        <>
            <ItemListContainers productData={products}/>
        </>
    )
}