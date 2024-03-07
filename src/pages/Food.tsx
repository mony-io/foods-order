import Shop from '../components/Shop.tsx';
import Product from '../components/Product.tsx';
import { DUMMY_PRODUCTS } from '../dummy-products.ts';

function Food() {
    return (
        <Shop>
            {DUMMY_PRODUCTS.map((product) => (
                <li key={product.id}>
                    <Product {...product} />
                </li>
            ))}
        </Shop>
    )
}

export default Food;