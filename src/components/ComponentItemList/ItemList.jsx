import { Item } from './Item.jsx';
export const ItemList = ({productData}) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {productData.map(e => {
                return (
                    <Item title={e.title} stock={e.stock} price={e.price} img={e.img}/>
                )
            })}
        </div>
    )
}