import { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'


export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        fetchProductos()

    }, [])

    return (
        <ProductContext.Provider value={{product}}>
            {children}
        </ProductContext.Provider>
    )
}