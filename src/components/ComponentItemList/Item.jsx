import { Col, Card, Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";

export const Item = ({img, title, price, id, stock}) => {

    return (
    <Col>
        <Card className='border border-info' style={{ width: '18rem', marginTop:'3%'}} >
            <Card.Img variant="top" src={img} style={{height: '35vh'}}/>
            <Card.Body>
                <Card.Title style={{fontSize: 15, height: '7vh'}}>{title}</Card.Title>
                <Card.Text style={{fontSize: 18}}>$ {price}</Card.Text>
                <ItemCount stock={stock} initial={1}/>
                <Button style={{width: '100%', margin: '2% auto'}} variant="outline-primary"><Link to={`/item/${id}`}>Ver Detalle</Link></Button>
            </Card.Body>
        </Card>
    </Col>
    )
}