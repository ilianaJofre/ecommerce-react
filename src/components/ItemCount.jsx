import { Link } from "react-router-dom";
import { useState } from "react";

export const ItemCount = ({stock, id}, {initial = 1}) => {
    
    const [cantidad, setCantidad] = useState (initial);
    const [cart, setCart ] = useState([]);

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
    if (stock == 0){
        return (
            <p>Sin stock disponible!</p>
        )
    } else {
        return (
            <>
                <div className="d-flex groupButoms" role="group" ariaLabel="Basic example">
                        <button  type="button" className="btn btn-secondary" onClick = {resta}>-</button>
                        <input type="value" className="btn contador"value={cantidad} readOnly/>
                        <button type="button" className="btn btn-secondary" onClick = {suma}>+</button>
                </div>
                    <button className='style' onClick={onAdd}><Link className='btn btn-primary' to={`/item/${id}`}>Ver Detalle</Link></button>
                    <button className='style' onClick={onAdd}><Link className='btn btn-primary' to={'/'}>Agregar al carrito</Link></button>
            </>
        )
    }
}
