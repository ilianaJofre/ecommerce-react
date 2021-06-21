import { useState } from "react";
export const ItemCount = (stock) => {
    const [cantidad, setCantidad] = useState (1);
    const [cart, setCart ] = useState([]);

    console.log(cart);
    
    const suma = () => {
            if (cantidad<stock){
                setCantidad(cantidad+1)
            }
    }
    return (
        <div>
                <button onClick = { () => { setCantidad(cantidad - 1) }}>-</button>
                <input type="number" value={cantidad} readOnly/>
                <button onClick = {suma}>+</button>
                <button className='btn btn-primary' onClick={() => { setCart([...cart, {id:1, name:'Test', cantidad: cantidad}]) }}>Agregar al carrito</button>
        </div>
    )

}
