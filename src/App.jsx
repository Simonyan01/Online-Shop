import { products as data } from "./data/products.js";
import { useState } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);

  const moveToCart = (product) => {
    const found = basket.find(item => item.id === product.id)
    if (found) {
      found.count++
      setBasket([...basket])
    } else {
      setBasket([...basket, { ...product, count: 1 }])
    }
  }

  const quantityUp = (product) => {
    setBasket(
      basket
        .map(item => (
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        ))
    )
  }

  const quantityDown = (product) => {
    setBasket(
      basket
        .map(item => (
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        ))
        .filter(item => item.count > 0)
    )
  }

  const clearProduct = (product) => {
    setBasket(
      basket.filter(item => item.id !== product.id)
    )
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Online Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {
          products.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center space-y-4"
            >
              <img
                src={item.photo}
                alt={item.title}
                className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-md"
              />
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm text-white">{item.price} USD</p>
              <small className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs">
                {item.category}
              </small>
              <button onClick={() => moveToCart(item)} className="mt-4 bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded-full shadow-md">
                Add to Basket
              </button>
            </div>
          ))
        }
      </div>

      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Basket</h2>
        <table className="w-full text-left border-collapse">
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
                <tr key={item.id} className="odd:bg-gray-700 even:bg-gray-600">
                  <td className="py-2 px-4">{item.title}</td>
                  <td className="py-2 px-4">{item.price}</td>
                  <td className="py-2 px-4">{item.count}</td>
                  <td className="py-2 px-4">{item.count * item.price} $</td>
                  <td className="py-2 px-4 space-x-2">
                    <button onClick={() => quantityUp(item)} className="bg-purple-500 hover:bg-purple-400 text-white py-1 px-3 rounded">
                      +
                    </button>
                    <button onClick={() => quantityDown(item)} className="bg-purple-500 hover:bg-purple-400 text-white py-1 px-3 rounded">
                      -
                    </button>
                    <button onClick={() => clearProduct(item)} className="bg-red-600 hover:bg-red-500 text-white py-1 px-3 rounded">
                      X
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default App;
