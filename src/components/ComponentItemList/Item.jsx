import { Col, Card } from "react-bootstrap";
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
            <Card className='mt-5' style={{ width: '18rem' }}>
                <div className='w-60 m-3'>
                    <img src= {img} className='img' alt='Produc image'/>
                </div>
                <div className="card-body">
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>$ {price}</p>
                    <ItemCount stock={stock} id={id} resta={resta} suma={suma} onAdd={onAdd} cantidad={cantidad}/>
                    { (cart.length >= 1) ?
                        <button className='style'><Link className='btn btn-primary' to={'/cart'}>Terminar compra</Link></button>
                        :
                        ''
                    }
                    <button className='style'><Link className='btn btn-primary' to={`/item/${id}`}>Ver Detalle</Link></button>
                </div>
            </Card>
        </Col>
    )
}