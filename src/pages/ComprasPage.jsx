import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductContext } from "../context/ProductContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {

    const { product } = useContext( ProductContext )

    const { addBuy, deleteBuy } = useContext(CarritoContext)

    const handleAdd = (compra) =>{
      addBuy(compra)
    }
    const handleDelete = (id) =>{
      deleteBuy(id)
    }
   

  return (
    <>
    <h1>Compras: </h1>
    <hr />

    {product.map(products => (
        <Card 
        key={products.id}
        imagen={products.image}
        titulo={products.title}
        descripcion={products.description}
        precio={products.price}
        handleAgregar={() => handleAdd(products)}
        handleQuitar={() => handleDelete(products.id)}
        >

        </Card>
    ))}
    
    </>
  )
}