import React from "react";
import { Col, Image, Alert } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../styles/Inicio.css";
const Inicio = () => {
  return (
    <div>
      
      <div className >
          <center>
            
            <Alert variant="warning">
            <Col xs={10} md={8}>
              <Image src="../imagenes9/logoicon.png" rounded />
            </Col>
  <Alert.Heading>¡Bienvenidos!</Alert.Heading>
  <p>
  Este aplicativo esta diseñado para ofrecer múltiples y diversas
              opciones de sitios y rincones a visitar de este hermoso municipio
              "GUATAPE"
  </p>
  
  
</Alert>
          </center>
        </div>
      <center>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>
                <font className="Leisy:)">
                  <font className="Leisy:)">USUARIO </font>{" "}
                </font>
              </h2>
              <p>
                <img
                  className="mb-4"
                  src="./imagenes9/MALETA1.png"
                  alt="Logo"
                  width="182"
                  height="190"
                />
              </p>
              <p>
                <Link class="btn btn-success" to="/Registro" role="button">
                  <font className="Leisy:)">
                    <font className="Leisy:)">INICIAR</font>
                  </font>
                </Link>
              </p>
            </div>
            <div class="col-md-6">
              <h2>
                <font className="Leisy:)">
                  <font className="Leisy:)">SECRETARIA DE TURISMO</font>
                </font>
              </h2>
              <p>
                <img
                  className="mb-4"
                  src="./imagenes9/muñecos.jpg"
                  alt="Logo"
                  width="182"
                  height="182"
                />
              </p>
              <p>
                <Link class="btn btn-primary" to="/Registro1" role="button">
                  <font className="Leisy:)">
                    <font className="Leisy:)">INICIAR</font>
                  </font>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default withRouter(Inicio);