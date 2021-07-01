import { ItemDetail } from './ItemDetail.jsx' 

export const ItemDetailContainer = ({productData}) => {
    return (
        <>
            {productData.map(e => {
                return (
                    <ItemDetail title={e.title} price={e.price} img={e.img}/>
                )
            })}
        </>
    )
}