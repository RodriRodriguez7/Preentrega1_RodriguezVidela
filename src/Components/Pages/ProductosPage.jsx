import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom
import productosMate from '../Productos/productosMate.json';
import CardItem from '../CardItems/CardItem';
import '../CardItems/CardItem.css';

const ProductosMate = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(productosMate.productos);
  }, []);

  return (
    <div className="container">
      {productos.map((producto) => (
        <div key={producto.id}>
          <h1>{producto.nombre}</h1>
          <Link to={`/producto/${producto.id}`}>
            <CardItem producto={producto} />
          </Link>
          <p>Precio: ${producto.precio} pesos argentinos</p>
        </div>
      ))}
    </div>
  );
};

export default ProductosMate;
