import {NavBar} from '../components/NavBar.jsx';
import { ItemListContainers } from '../components/ComponentItemList/ItemListContainers.jsx';

export const HomeContainer = ({setProducts}) => {
    return (
        <>
            <NavBar />
            <section>
                <ItemListContainers productData={setProducts}/>
            </section>
        </>
    )
}