import { products as data } from "@data/products.js";
import ProductList from "@components/product-list";
import { moveToCart } from "@utils/basket-utils";
import Basket from "@components/basket";
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);

  return (
    <section className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Online Shop</h1>
      <ProductList
        products={products}
        onAdd={(product) => moveToCart(basket, setBasket, product)}
      />
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Basket</h1>
        <Basket
          basket={basket}
          setBasket={setBasket}
        />
      </div>
    </section>
  );
}
