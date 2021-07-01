import { useState } from "react";
const marginTop = {
    marginTop: '3%',
}
export const ItemCount = ({stock}, {initial = 1}) => {
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
                <div className="btn-group" role="group" ariaLabel="Basic example">
                        <button type="button" className="btn btn-secondary" onClick = {resta}>-</button>
                        <input type="value" className="btn btn-light"value={cantidad} readOnly/>
                        <button type="button" className="btn btn-secondary" onClick = {suma}>+</button>
                </div>
                <div style={marginTop}>
                    <button className='btn btn-primary' onClick={onAdd}>Agregar al carrito</button>
                </div>
            </>
        )
    }
}
