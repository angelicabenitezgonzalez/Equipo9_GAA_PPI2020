import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/Hotel.css";

const Sitio_interes1 = (props) => {
  const { history } = props;
  return (
    
      <div className="Hotel">
        <body>
        <center>
          <div className="la-fogata py-5">
            <img
              src="./imagenes9/45.jpg"
              className="imghotel"
              alt="imghotel"
            />
          </div>
        </center>
        <center>
          <div className="Desc py-5">
          <center>  <h1 className="titulo1">calles del recuerdo</h1></center>
            <center><h1 className="Descripcion">
           Es este el pueblo colorido del oriente antioqueño, sus habitantes intentarán conservar aquella parte de la historia que les fuE arrebatada.
            </h1></center>
          </div>
        </center>
        <center>
        <div>
          <button className="Back btn" onClick={() => history.push("/Listas1")}>
            <img
              className="mr-3"
              src="./imagenes9/flechaizquierda.jpg"
              width="100"
              height="60"
              alt="Logo"
              loading="lazy"
            />
          </button>
          <button type="button" class="btn btn-secondary" onClick={() => history.push("/Actualizar2")}>AGREGAR</button>
          <span>
            <button className="Back btn" onClick={() => history.push("/Calificar")}>
              <img
                src="./imagenes9/Flechaderecha.jpg"
                width="45"
                height="35"
                alt="Logo"
                loading="lazy"
              />
            </button>
          </span>
        </div>
        </center>
        </body>
      </div>
    
  );
};
export default withRouter(Sitio_interes1);