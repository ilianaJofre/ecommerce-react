import { Item } from './Item.jsx';
export const ItemList = ({productData}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 w-100">
            {productData.map(e => {
                return (
                    <Item id={e.id} title={e.title} stock={e.stock} price={e.price} img={e.img}/>
                )
            })}
        </div>
    )
}