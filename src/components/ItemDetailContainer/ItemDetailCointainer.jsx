import { getProduct } from '../../utils/getProduct.js';
import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail.jsx' 
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    let productParams = useParams();
    let id = productParams.id;
    const [product, setProduct] = useState ([]);
    
    useEffect( () => {      
      const processDB = async () => {
        let data =  await getProduct(id);
        setProduct(data);
      }
      processDB();
    }, [id]);
    console.log(productParams)
    return (
        <ItemDetail product = {product}/>
    )
}