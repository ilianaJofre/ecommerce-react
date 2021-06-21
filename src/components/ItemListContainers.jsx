import { ItemCount } from "./ItemCount";
const divStyle = {
    width: '18rem',
    margin: '20px auto'
};
export const ItemListContainers = ({productData}) => {
    return (
        <div className="card" style={divStyle}>
            <img src= '/images/wip.jpg' className='card-img-top' alt='Produc image'/>
            <div className="card-body">
                <h5 className='card-title'>{productData.title}</h5>
                <p className='card-text'>{productData.description}</p>
            </div>
            <ItemCount stock={productData.stock}/>
        </div>
    );
} 