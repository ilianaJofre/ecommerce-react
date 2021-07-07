import { Link } from "react-router-dom";

export const ItemCount = ({stock, id, resta, suma, onAdd, cantidad}) => {
    
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
                    <button className='style btn btn-primary' onClick={onAdd}>Agregar al carrito</button>
            </>
        )
    }
}
