import { useState } from "react";
export const ItemCount = ({stock}, {initial = 1}) => {
    const [cantidad, setCantidad] = useState (initial);
    const [cart, setCart ] = useState([]);
    console.log(cart);

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
            <div>
                    <button onClick = {resta}>-</button>
                    <input type="value" value={cantidad} readOnly/>
                    <button onClick = {suma}>+</button>
                    <button className='btn btn-primary' onClick={onAdd}>Agregar al carrito</button>
            </div>
        )
    }
}
