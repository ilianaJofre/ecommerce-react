import { Container, Row } from 'react-bootstrap';
import { Item } from './Item.jsx';
export const ItemList = ({productData}) => {
    return (
        <Container >
            <Row>
                {productData.map((e, index) => {
                    return (
                        <Item key={index} id={e.id} title={e.title} stock={e.stock} price={e.price} img={e.img}/>
                    )
                })}
            </Row>
        </Container>
    )
}