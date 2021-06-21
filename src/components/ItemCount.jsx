import { useState } from "react";
export const ItemCount = (stock) => {
    const [cantidad, setCantidad] = useState (1);
    const [cart, setCart ] = useState([]);
    console.log(cart);

    return (
        <div>
                <button onClick = { () => { setCantidad(cantidad - 1) }}>-</button>
                <input type="value" value={cantidad} min="0" max="10" readOnly/>
                <button onClick = { () => { setCantidad(cantidad + 1) }}>+</button>
                <button className='btn btn-primary' onClick={() => { setCart([...cart, {id:1, name:'Test', cantidad: cantidad}]) }}>Agregar al carrito</button>
        </div>
    )

}
