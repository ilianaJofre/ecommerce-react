import { Link } from "react-router-dom";
import { ItemCount } from '../ItemCount.jsx';
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

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
        <Card className='border border-info' style={{ width: '18rem', margin:'5% auto'}} >
            <Card.Img variant="top" src={product.thumbnail} style={{width: '50%', margin: 'auto'}}/>
            <Card.Body>
                <Card.Title style={{fontSize: 15, height: '7vh'}}>{product.title}</Card.Title>
                <Card.Text style={{fontSize: 18}}>$ {product.price}</Card.Text>
                <ItemCount resta={resta} suma={suma} onAdd={onAdd} cantidad={cantidad}/>
                { (cart.length >= 1) ?
                    <Button style={{width: '100%', margin: '2% auto'}} variant="outline-success"><Link to={'/cart'}>Terminar compra</Link></Button>
                    :
                    ''
                }
                <Link  style={{width: '100%'}} className='btn btn-primary'to={'/'}>Volver</Link>
            </Card.Body>
        </Card>
    )
}