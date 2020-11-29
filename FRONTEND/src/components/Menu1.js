import React from 'react';
import {withRouter, Link} from "react-router-dom";
import{   Navbar, Nav,  }from 'react-bootstrap'
import "../styles/Menu1.css"


export const Menu1 =()=>{
return(


<div classname="Menu">
      <Navbar bg="" expand="dark">
      
        <Navbar.Brand href="#home">LOOK UP GUATAPE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          
            <Link to="/">Inicio</Link>

            <Link to="/Listah">Hoteles</Link>

            <Link to="/Listar">Restaurantes</Link>

            <Link to="/listas">Sitio interes</Link>

            <Link to="/calificar">Calificacion</Link>

            <Link to="/Contacto">Contacto</Link>
          </Nav>
          
            
        </Navbar.Collapse>
      </Navbar>
      <br />

      
      

     

      
    </div>


);

};


export default withRouter(Menu1);