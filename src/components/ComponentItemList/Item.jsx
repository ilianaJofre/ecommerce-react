import { ItemCount } from "../ItemCount"
const divStyle = {
    width: '18rem',
    margin: '50px auto',
};
export const Item = ({id, title, price, img, stock}) => {
    return (
        <div className="col m-0">
            <div className="card h-85" style={divStyle}>
                <img src= {img} className='card-img-top' alt='Produc image'/>
                <div className="card-body">
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>$ {price}</p>
                    <ItemCount stock={stock} id={id}/>
                </div>
            </div>
        </div>
    )
}