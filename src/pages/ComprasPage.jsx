import { useContext } from "react";
import Card from "../components/Card";
import { ProductContext } from "../context/ProductContext";
import { CarritoContext } from "../context/CarritoContext";

function ComprasPage() {
  const { productos } = useContext(ProductContext);

  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);
  console.log(listaCompras);
  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };

  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  const handleAumentarCantidad = (id) => {};

  const handleDisminuirCantidad = (id) => {};

  return (
    <div>
      <h1>ComprasPage</h1>
      <hr />
      {productos.map((p) => (
        <Card
          key={p.id}
          img={p.image}
          title={p.title}
          description={p.description}
          price={p.price}
          handleAgregar={() => handleAgregar(p)}
          handleQuitar={() => handleQuitar(p.id)}
        ></Card>
      ))}
    </div>
  );
}

export default ComprasPage;
