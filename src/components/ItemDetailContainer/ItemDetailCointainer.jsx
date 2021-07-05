import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail.jsx' 
import { getData } from '../../utils/getData.js';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const productParams = useParams();
    const [product, setProduct] = useState ([]);
    useEffect( async () => {
      
      const processDB = async () => {
        let data =  await getData();
        let aux = data.find(e => e.id === productParams.id);
        
        setProduct(aux);
      }
      processDB();
    }, [productParams]);
    return (
        <ItemDetail product = {product}/>
    )
}