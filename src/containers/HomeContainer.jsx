import {NavBar} from '../components/NavBar.jsx';
import { ItemListContainers } from '../components/ComponentItemList/ItemListContainers.jsx';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailCointainer.jsx';

export const HomeContainer = ({setProducts}) => {
    return (
        <>
            <NavBar />
            <ItemDetailContainer/>
            <section>
                <ItemListContainers productData={setProducts}/>
            </section>
        </>
    )
}