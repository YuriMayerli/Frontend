import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//const URL = 'http://localhost:5000/api/producto/';
const URL = 'https://backend-6sad.onrender.com/api/producto';

const CompCrearProducto = () => {

    const [ nombre, setNombre] = useState('');
    const [ categoria, setCategoria] = useState('');
    const [ codigo, setCodigo] = useState('');
    const [ precio, setPrecio] = useState('');
   
    const navigate = useNavigate();


    // crear la funcion de guardar
    const guardarProducto = async (e) =>{

        e.preventDefault();

        await axios.post (URL,  {
            nombre:nombre, categoria: categoria, codigo:codigo, precio: precio
        })
        navigate('/producto')
    }


    return (

        <div>
            <h3>Formulario de crear producto</h3>
            <form onSubmit={guardarProducto}>

                <div className="mb-3">
                <label className="form-label">Nombre de Producto</label>
                <input value={nombre}  onChange={(e) => setNombre(e.target.value)}
                type = 'text' className="form-control"/>
                </div>

                
                <div className="mb-3">
                <label className="form-label">Categoria</label>
                <input value={categoria}  onChange={(e) => setCategoria(e.target.value)}
                type = 'text' className="form-control"/>
                </div>

                
                <div className="mb-3">
                <label className="form-label">Codigo</label>
                <input value={codigo}  onChange={(e) => setCodigo(e.target.value)}
                type = 'number' className="form-control"/>
                </div>

                
                <div className="mb-3">
                <label className="form-label">Precio</label>
                <input value={precio}  onChange={(e) => setPrecio(e.target.value)}
                type = 'number' className="form-control"/>
                </div>

                
               
                <button type="submit" className="btn btn-primary"> <i className="fa-solid fa-floppy-disk"> </i></button>


            </form>
        </div>
    )
}

export default CompCrearProducto;