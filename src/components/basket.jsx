import { clearProduct, quantityDown, quantityUp } from "@utils/basket-utils"
import ProductItem from "@components/product-item"

const Basket = ({ basket, setBasket }) => {
    return (
        <table className="w-4/5 text-center m-auto">
            <thead>
                <tr className="bg-gray-700 text-purple-400">
                    <th className="py-2 px-4">Title</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Count</th>
                    <th className="py-2 px-4">Subtotal</th>
                    <th className="py-2 px-4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    basket.map((item) => (
                        <ProductItem
                            item={item}
                            key={item.id}
                            onUp={(product) => quantityUp(basket, setBasket, product)}
                            onDown={(product) => quantityDown(basket, setBasket, product)}
                            onClear={(product) => clearProduct(basket, setBasket, product)}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default Basket