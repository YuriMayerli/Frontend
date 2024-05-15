import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = "http://localhost:5000/api/producto";

const CompMostrarProducto = () => {
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    getProducto();
  }, []);

  // funcion para mostrar clientes
  const getProducto = async () => {
    const resul = await axios.get(URL);
    setProducto(resul.data);
  };

  // funcion eliminar producto
  const eliminarProducto = async (id) => {
    await axios.delete(`${URL}/${id}`);
    getProducto();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/producto/agregar/" className="btn btn-success mt-2 mb-2">
          <i className="fa-solid fa-cart-plus"></i>
          </Link>
          <div className="table-responsive">
            <table className="table table-dark table-striped-columns">
              <thead className="table-light">
                <tr>
                  <th>Nombre Producto</th>
                  <th>Categoria</th>
                  <th>Codigo </th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {producto.map((producto, index) => (
                  <tr key={index}>
                    <td>{producto.nombre}</td>
                    <td>{producto.categoria}</td>
                    <td>{producto.codigo}</td>
                    <td>{producto.precio}</td>

                    <td>
                      <Link
                        to={`/producto/editar/${producto._id}`}
                        className="btn btn-success mt-2 mb-2"
                      >
                        <i className="fa-solid fa-file-pen"></i>
                      </Link>
                      <button
                        onClick={() => eliminarProducto(producto._id)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      </td>
                    </tr>
                
                ))}
              </tbody>
            
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompMostrarProducto;
