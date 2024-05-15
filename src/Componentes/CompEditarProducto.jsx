import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://localhost:5000/api/producto/';

const CompEditarProducto = () => {

    const [ nombre, setNombre] = useState('');
    const [ categoria, setCategoria] = useState('');
    const [ codigo, setCodigo] = useState('');
    const [ precio, setPrecio] = useState('');
   
    const navigate = useNavigate();
    const {id} = useParams();


    // funcion actualizar


    const editarProducto = async (e) =>{

        e.preventDefault();

        await axios.patch (`${URL}${id}`,  {
            nombre:nombre, 
            categoria:categoria, 
            codigo:codigo, 
            precio:precio,
           
        })

        navigate ('/producto');        
    }
    useEffect(() => {
        getProductoID()

    }, []);

    const getProductoID = async () => {
        const resul = await axios.get (`${URL}${id}` )
        setNombre(resul.data.nombre)
        setCategoria(resul.data.categoria)
        setCodigo(resul.data.codigo)
        setPrecio(resul.data.precio)
       
    
    }

    return (


        <div>

            <h3>Formulario editar Producto</h3>
            <form onSubmit={editarProducto}>

                <div className="mb-3">
                <label className="form-label">Nombre del producto</label>
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
                <label className="form-label">precio</label>
                <input value={precio}  onChange={(e) => setPrecio(e.target.value)}
                type = 'number' className="form-control"/>
                </div>

                
               
                <button type="submit" className="btn btn-primary"> <i className="fa-regular fa-floppy-disk"></i></button>


            </form>

    </div>
)

}


export default CompEditarProducto;