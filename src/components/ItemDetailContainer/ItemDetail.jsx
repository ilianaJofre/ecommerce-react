const divStyle = {
    width: '20rem',
    margin: '3% auto',
};
export const ItemDetail = ({product}) => {
    return (
        <div className="card" style={divStyle}>
            <img src={product.img} className="card-img-top" alt="Imágen del producto"/>
            <div className="card-body">
                <p className="card-title">{product.title}</p>
                <p className="card-text">$ {product.price}</p>
            </div>
        </div>
    )
}