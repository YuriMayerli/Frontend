import React from "react";
import redes from "../imagenes/redes-sociales-desarrollo-sostenible.jpg"

const CompFooter = () => {

    return(

        <div>
            <div className="card-body">
                <h5 className="card-title"> Direccion calle 69 # 34 90 </h5>
                <p className="card-text"> Correo: industrias@gmail.com / Telefono: 601-3456789 </p>
                <img src={redes} className="App-logo1" alt="logo"/>
                                
            </div>
            <div className="card-footer text-muted"> Horario lunes - viernes 8am a 7pm </div>
        </div>
    )
}

export default CompFooter;



