import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ComprasPage from "./pages/ComprasPage";
import CarritoPage from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

function App() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPage />} />
            <Route path="/Carrito" element={<CarritoPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  );
}

export default App;
