import React, { useState } from "react";
import "../styles/card.css";

function Card({
  img,
  title,
  price,
  description,
  handleAgregar,
  handleAumentar,
  handleDisminuir,
  handleQuitar,
}) {
  const [added, setAdded] = useState(false);

  const Agregar = () => {
    handleAgregar();
    setAdded(true);
  };

  const Quitar = () => {
    handleQuitar();
    setAdded(false);
  };
  return (
    <div className="tarjeta">
      <img className="tarjeta-imagen" src={img} alt="" />
      <div className="tarjeta-contenido">
        <h1 className="tarjeta-titulo">{title}</h1>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">{price}</p>
        {added ? (
          <button type="button" className="boton-quitar" onClick={Quitar}>
            Quitar del carrito
          </button>
        ) : (
          <button type="button" className="boton-agregar" onClick={Agregar}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
