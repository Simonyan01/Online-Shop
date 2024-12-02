const ProductItem = ({ item, onUp, onDown, onClear }) => {
    return (
        <tr className="odd:bg-gray-700 even:bg-gray-600">
            <td className="py-2 px-4">{item.title}</td>
            <td className="py-2 px-4">{item.price.toFixed(2)}</td>
            <td className="py-2 px-4">{item.count}</td>
            <td className="py-2 px-4">{(item.count * item.price).toFixed(2)} $</td>
            <td className="py-2 px-4 space-x-2">
                <button onClick={() => onUp(item)} className="bg-purple-500 hover:bg-purple-400 text-white py-1 px-3 rounded">
                    +
                </button>
                <button onClick={() => onDown(item)} className="bg-purple-500 hover:bg-purple-400 text-white py-1 px-3 rounded">
                    -
                </button>
                <button onClick={() => onClear(item)} className="bg-red-600 hover:bg-red-500 text-white py-1 px-3 rounded">
                    X
                </button>
            </td>
        </tr>
    )
}

export default ProductItem