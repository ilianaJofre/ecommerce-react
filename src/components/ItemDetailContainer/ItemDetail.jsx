import { Link } from "react-router-dom";
import { ItemCount } from '../ItemCount.jsx';
import { useState } from "react";

const divStyle = {
    width: '20rem',
    margin: '3% auto',
};

export const ItemDetail = ({product}, {initial = 1}) => {
    const [cantidad, setCantidad] = useState (initial);
    const [cart, setCart ] = useState([]);
    const stock = product.available_quantity;
    const suma = () => {
        if (cantidad<stock){
            setCantidad(cantidad+1)
        }
        }
        const resta = () => {
            if (cantidad>1){
                setCantidad(cantidad-1)
            }
        }
        const onAdd = () => {
            setCart([...cart, {id:1, name:'Test', cantidad: cantidad}])
    }

    return (
        <div className="card" style={divStyle}>
            <img src={product.thumbnail} className='img rounded mx-auto d-block' alt="Imágen del producto"/>
            <div className="card-body">
                <p className="card-title">{product.title}</p>
                <p className="card-text">$ {product.price}</p>
            </div>
            <ItemCount resta={resta} suma={suma} onAdd={onAdd} cantidad={cantidad}/>
            { (cart.length >= 1) ?
                        <button className='style'><Link className='btn btn-primary' to={'/cart'}>Terminar compra</Link></button>
                        :
                        ''
            }
            <Link  className='btn btn-primary'to={'/'}>Volver</Link>
        </div>
    )
}