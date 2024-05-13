import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function CarritoPage() {
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);
  console.log(listaCompras);
  const totalCompra = () => {
    return listaCompras
      .reduce((total, item) => total + item.cantidad * item.price, 0)
      .toFixed(2);
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((p) => (
            <tr key={crypto.randomUUID()}>
              <th>{p.title}</th>
              <td>{p.price}</td>

              <td>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => disminuirCantidad(p.id)}
                >
                  -
                </button>
                {p.cantidad}
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => aumentarCantidad(p.id)}
                >
                  +
                </button>
              </td>

              <td>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => eliminarCompra(p.id)}
                >
                  Eliminar compra
                </button>
              </td>
            </tr>
          ))}
          <th>Total</th>
          <td> </td>
          <td></td>
          <td>$ {totalCompra()}</td>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => print()}>
        Comprar
      </button>
    </div>
  );
}

export default CarritoPage;
