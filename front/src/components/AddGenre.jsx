import React from "react";
import styles from "../css-modules/addGenre.module.css";

export default ({ addGenre }) => {
  return (
    <div
      className="modal fade"
      id="modalGenreAdd"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Agregar Género
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={e => {
                e.preventDefault();
                addGenre(e.target.genero.value);
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="genero"
                  className="form-control"
                  placeholder="Ingrese un nuevo género"
                />
                <strong id="msgAddGenre" className={styles.msgHide}>
                  ¡Este género ya existe!
                </strong>
              </div>
            </form>
          </div>
          <div className="modal-footer">
          <button
              className="btn btn-secondary"
              type="submit"
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
