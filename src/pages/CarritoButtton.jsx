import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"


export const CarritoButton = () => {

  const { listBuy, addBuy, deleteBuy } = useContext (CarritoContext)

  return (
        <Badge badgeContent={listBuy.length} color="primary">
            <ShoppingCart></ShoppingCart>
        </Badge>
  )
}