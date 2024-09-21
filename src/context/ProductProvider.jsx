import { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([])

  const fetchProductos = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    // como te suguiero que lo hagas es asi:
    // TODO:
    // fetch('https://fakestoreapi.com/products')
    //   .then((response) => response.json())
    //   .then((data) => setProduct(data))
    //   .catch((error) => console.error(error))
    // porque si tienes algun error en la peticion fetch, no lo capturas y te va a explotar la app
    const data = await response.json()
    console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    fetchProductos()

    // no hay necesidad de crear la funcion fetchProductos fuera del useEffect
  }, [])

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  )
}
