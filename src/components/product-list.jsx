const ProductList = ({ products, onAdd }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {
                products.map((item) => (
                    <div key={item.id} className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center space-y-4">
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
                        <button onClick={() => onAdd(item)} className="mt-4 bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded-full shadow-md">
                            Add to Basket
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList