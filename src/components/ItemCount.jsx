import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar, ButtonGroup} from "react-bootstrap";
export const ItemCount = ({stock, initial}) => {
    
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

    if (stock === 0){
        return (
            <p>Sin stock disponible!</p>
        )
    } else {
        return (
            <>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup style={{margin:'3% auto'}} className="mr-2" size="sm" aria-label="First group">
                        <Button variant="secondary" onClick = {resta}>-</Button>
                        <input type="value" className="btn contador"value={cantidad} readOnly/>                        
                        <Button variant="secondary" onClick = {suma}>+</Button>
                    </ButtonGroup>
                    <Button style={{width: '100%', margin: '2% auto'}} variant="outline-primary" onClick={onAdd}>Agregar al carrito</Button>

                    { (cart.length >= 1) ?
                    <Button style={{width: '100%', margin: '2% auto'}} variant="outline-success"><Link to={'/cart'}>Terminar compra</Link></Button>
                    :
                    ''
                    }
                </ButtonToolbar>
            </>
        )
    }
}
