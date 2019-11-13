import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css-modules/Dashboard.module.css";

export default props => {
  useEffect(() => {
    props.fetchBooks();
  }, []);

  if (props.authorized > 1) {
    return (
      <div className={"btn-group-vertical " + styles.dashboard}>
        <Link to="/dashboard/add">
          <button className={"btn btn-info " + styles.btn}>
            Agregar productos
          </button>
        </Link>
        <button
          onClick={() => {
            props.history.push("/");
          }}
          className={"btn btn-info " + styles.btn}
        >
          Editar productos
        </button>
        <button
          className={"btn btn-info " + styles.btn}
          data-toggle="modal"
          data-target="#modalGenreAdd"
        >
          Agregar género
        </button>

        <button
          className={"btn btn-info " + styles.btn}
          data-toggle="modal"
          data-target="#modalGenreEdit"
        >
          Editar género
        </button>

        <button className={"btn btn-info " + styles.btn}>Órdenes</button>
        <button className={"btn btn-info " + styles.btn}>
          Editar usuarios
        </button>
      </div>
    );
  } else {
    return <h3 className="text-danger"> ACCESO DENEGADO</h3>;
  }
};
