import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { ProductProvider } from './context/ProductProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const CarritoApp = () => {
  return (
    <ProductProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        {/* se puede poner <NavBar /> */}
        <div className="container">
          <Routes>
            {/* same */}
            <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
            <Route
              path="/carrito"
              element={<CarritoPage></CarritoPage>}
            ></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
            {/* lo mas conveniente en vez de mandar cualquier ruta para el home es que se envien a una pagina de error */}
          </Routes>
        </div>
      </CarritoProvider>
    </ProductProvider>
  )
}
