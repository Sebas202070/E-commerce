import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "AGREGAR_COMPRA":
        return [...state, action.payload];

      case "AUMENTAR_CANTIDAD_COMPRA":
        return state.map((p) => {
          const can = p.cantidad + 1;
          if (p.id === action.payload)
            return {
              ...p,
              cantidad: can,
            };
          return p;
        });

      case "DISMINUIR_CANTIDAD_COMPRA":
        return state.map((p) => {
          const can = p.cantidad - 1;
          if (p.id === action.payload && p.cantidad > 0)
            return {
              ...p,
              cantidad: can,
            };
          return p;
        });
      case "ELIMINAR_COMPRA":
        return state.filter((f) => f.id !== action.payload);

      default:
        return state;
    }
  };

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "AGREGAR_COMPRA",
      payload: compra,
    };
    dispatch(action);
  };

  const aumentarCantidad = (id) => {
    const action = {
      type: "AUMENTAR_CANTIDAD_COMPRA",
      payload: id,
    };
    dispatch(action);
  };

  const disminuirCantidad = (id) => {
    const action = {
      type: "DISMINUIR_CANTIDAD_COMPRA",
      payload: id,
    };
    dispatch(action);
  };

  const eliminarCompra = (id) => {
    const action = {
      type: "ELIMINAR_COMPRA",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
