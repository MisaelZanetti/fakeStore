import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductoId() {
    const { id } = useParams();
    const [producto, setProducto] = useState({
        rating: {
            rate: 0,
            count: 0
        }   
    });

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProducto(data));
    }, []);

    return (
        <div className="detalle-container">
            <Link to="/" className="volver">← Volver</Link>
            <div className="detalle-card">
                <img src={producto.image} alt={producto.title} />
                <div className="detalle-info">
                    <h2>{producto.title}</h2>
                    <p className="categoria">Categoría: {producto.category}</p>
                    <p className="descripcion">{producto.description}</p>
                    <p className="precio">${producto.price}</p>
                    <p className="rating">
                        ⭐ {producto.rating.rate} ({producto.rating.count} reseñas)
                    </p>
                </div>
            </div>
        </div>
    );
}
