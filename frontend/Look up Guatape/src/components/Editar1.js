import React from "react";
import { withRouter } from "react-router-dom";

const Editar1 = (props) => {
  const { history } = props;
  return (
    <center>
      <div>
        <h1>Editar</h1>
        <div class="form-group" col-md-6>
          <label for="exampleFormControlTextarea1">descripcion</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        
        
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => history.push("/Listah1")}
        >
          Cancelar
        </button>

        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => history.push("/Listah1")}
        >
          Listo
        </button>
      </div>
    </center>
  );
};

export default withRouter(Editar1);