import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

require('../sass/style.scss');

const app = document.getElementById("app");
ReactDOM.render(<Main />,app);