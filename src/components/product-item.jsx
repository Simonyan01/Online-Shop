const ProductItem = ({ item, onAdd }) => {
    return (
        <div key={item.id} className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center space-y-4">
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-sm text-white">{item.price} USD</p>
            <small className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs">
                {item.category}
            </small>
            <button onClick={() => onAdd(item)} className="mt-4 bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded-full shadow-md">
                Add to Basket
            </button>
        </div>
    )
}

export default ProductItem