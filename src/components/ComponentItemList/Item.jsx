import { Col, Card, Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Item = ({id, title, price, img, stock}, {initial =1}) => {

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
    return (
    <Col>
        <Card className='border border-info' style={{ width: '18rem', marginTop:'3%'}} >
            <Card.Img variant="top" src={img} style={{height: '35vh'}}/>
            <Card.Body>
                <Card.Title style={{fontSize: 15, height: '7vh'}}>{title}</Card.Title>
                <Card.Text style={{fontSize: 18}}>$ {price}</Card.Text>
                <ItemCount stock={stock} id={id} resta={resta} suma={suma} onAdd={onAdd} cantidad={cantidad}/>
                <Button style={{width: '100%', margin: '2% auto'}} variant="outline-primary"><Link to={`/item/${id}`}>Ver Detalle</Link></Button>
                    { (cart.length >= 1) ?
                        <Button style={{width: '100%', margin: '2% auto'}} variant="outline-success"><Link to={'/cart'}>Terminar compra</Link></Button>
                        :
                        ''
                    }
            </Card.Body>
        </Card>
    </Col>
    )
}