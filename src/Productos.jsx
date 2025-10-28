import { useEffect, useState } from "react";
import "./Productos.css";
import { Link } from "react-router-dom";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Mala conexión de wifi!"
        });
      });
  }, []);

  return (
    <div className="productos-container">
      <h2 className="productos-title">Lista de productos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.image} alt={producto.title} className="producto-img" />
            <h3 className="producto-titulo">{producto.title}</h3>
            <p className="producto-categoria">Categoría: {producto.category}</p>
            <p className="producto-precio">${producto.price}</p>
            <p className="producto-rating">
              ⭐ {producto.rating.rate} ({producto.rating.count} reseñas)
            </p>
            <Link to={`/producto/${producto.id}`}><button className="verDt">Ver detalles</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}