import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

function Navbar() {
  const { listaCompras } = useContext(CarritoContext);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid gap-3">
        <NavLink to="/" class="nav-link active" aria-current="page" href="#">
          Compras
        </NavLink>
        <NavLink to="/Carrito" class="navbar-brand" href="#">
          Carrito
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"></li>
          </ul>
          <NavLink to="/Carrito">
            <Badge badgeContent={listaCompras.length} color="secondary">
              <ShoppingCart color="action" />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
