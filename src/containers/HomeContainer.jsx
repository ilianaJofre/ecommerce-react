import {NavBar} from '../components/NavBar.jsx';
import {ItemListContainers} from '../components/ItemListContainers.jsx';

export const HomeContainer = () => {
    const product = {
        title: 'Product test',
        description: 'Soy un producto de prueba',
        stock: 6,
        }
    return (
        <>
            <NavBar />
            <section>
                <ItemListContainers productData={product}/>
            </section>
        </>
    )
}