import "../css-modules/greeting.module.css";
import React from "react";

export default props => {
  return <h6 className="col-lg-4 greeting">Hola, {props.name}</h6>;
};
