import React from "react";
import ReactDOM from "react-dom";

import Ppicontainers from "./containers/Ppicontainers"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Ppicontainers />
    </React.StrictMode>,

  rootElement
);

