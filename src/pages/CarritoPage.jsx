import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {
  const { listBuy, addCant, lessCant, deleteBuy } = useContext(CarritoContext)

  const calcTotal = () => {
    return listBuy
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2)
    // siempre que se trabajan con precios en js se hace con enteros, si la api te esta sirviendo productos con punto fotante esta mal la api
  }

  const handleImpresion = () => {
    print()
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listBuy.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => lessCant(item.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{item.cantidad}</button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => addCant(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteBuy(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>
              <b>TOTAL: </b>
            </th>
            <td></td>
            <td></td>
            <td>${calcTotal()}</td>
          </tr>
        </tfoot>
      </table>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={handleImpresion}
          disabled={listBuy.length < 1}
        >
          COMPRAR
        </button>
      </div>
    </>
  )
}
