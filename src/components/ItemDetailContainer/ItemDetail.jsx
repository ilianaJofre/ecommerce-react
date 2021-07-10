import { Link } from "react-router-dom";
import { ItemCount } from '../ItemCount.jsx';
import { Card } from "react-bootstrap";

export const ItemDetail = ({product}) => {
        return (
        <Card className='border border-info' style={{ width: '18rem', margin:'5% auto'}} >
            <Card.Img variant="top" src={product.thumbnail} style={{width: '50%', margin: 'auto'}}/>
            <Card.Body>
                <Card.Title style={{fontSize: 15, height: '7vh'}}>{product.title}</Card.Title>
                <Card.Text style={{fontSize: 18}}>$ {product.price}</Card.Text>
                <ItemCount stock={product.availability_quantity} id={product.id} initial={1}/>
                <Link  style={{width: '100%'}} className='btn btn-primary'to={'/'}>Volver</Link>
            </Card.Body>
        </Card>
    )
}