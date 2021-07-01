const divStyle = {
    width: '20rem',
    margin: '3% auto',
};
export const ItemDetail = ({title, price, img}) => {
    return (
        <div className="card" style={divStyle}>
            <img src={img} className="card-img-top" alt="Imágen del producto"/>
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-text">$ {price}</p>
            </div>
        </div>
    )
}