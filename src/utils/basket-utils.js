const moveToCart = (basket, setBasket, product) => {
    const found = basket.find((item) => item.id === product.id)
    if (found) {
        found.count++
        setBasket([...basket])
    } else {
        setBasket([...basket, { ...product, count: 1 }])
    }
}

const quantityUp = (basket, setBasket, product) => {
    setBasket(
        basket.map((item) => (
            item.id === product.id ? { ...item, count: item.count + 1 } : item
        ))
    )
}

const quantityDown = (basket, setBasket, product) => {
    setBasket(
        basket
            .map((item) => (
                item.id === product.id ? { ...item, count: item.count - 1 } : item
            ))
            .filter((item) => item.count > 0)
    )
}

const clearProduct = (basket, setBasket, product) => {
    setBasket(
        basket.filter((item) => item.id !== product.id)
    )
}

export { moveToCart, quantityUp, quantityDown, clearProduct }