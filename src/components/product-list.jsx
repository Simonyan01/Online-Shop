import ProductItem from "./product-item"

const ProductList = ({ products, onAdd }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {
                products.map((item) => (
                    <ProductItem
                        key={item.id}
                        item={item}
                        onAdd={onAdd}
                    />
                ))
            }
        </div>
    )
}

export default ProductList