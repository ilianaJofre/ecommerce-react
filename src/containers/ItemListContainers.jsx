const divStyle = {
    width: '18rem',
    margin: '20px auto'
}
export const ItemListContainers = () => {
    return (
        <div className='card' style={divStyle}>
            <img src= '/images/wip.jpg' className='card-img-top' alt='Produc image'/>
            <div className='card-body'>
                <h5 className='card-title'>Test Product</h5>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit class, tristique ridiculus nostra platea tempor bibendum dis.</p>
            </div>
        </div>
    );
} 