import React, { useEffect } from "react";
import styles from "../css-modules/addGenre.module.css";
import store from "../store";
import { fetchGenres } from "../store/actions/books";

export default ({
  genres,
  inputValue,
  selectedGenre,
  handleSubmit,
  handleChange,
  handleGenreChange
}) => {
  useEffect(() => {
    store.dispatch(fetchGenres());
  }, []);

  return genres.length ? (
    <div
      className="modal fade"
      id="modalGenreEdit"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      {console.log("funcion:", handleSubmit)}
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Editar Género
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
                handleSubmit(e, selectedGenre, inputValue);
              }}
            >
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {selectedGenre ? selectedGenre : genres[0].nombre}
                </button>
                <div className="dropdown-menu">
                  {genres.map((genre, index) => (
                    <button
                      key={index}
                      value={genre.nombre}
                      className={
                        "dropdown-item" +
                        " " +
                        (selectedGenre === genre.nombre ? "active" : "")
                      }
                      onClick={e => handleGenreChange(e)}
                    >
                      {genre.nombre}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id={styles.editGenreInput}
                  name="genero"
                  className="form-control"
                  value={inputValue}
                  onChange={e => handleChange(e)}
                />
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={e => handleSubmit(e, selectedGenre, inputValue)}
                >
                  Modificar
                </button>
                <button type="button" className="btn btn-secondary">
                  Eliminar
                </button>
                <p id="msgModifyGenre" className={styles.msgHide}>
                  No se puedo modificar el género
                </p>
                <p id="msgDeleteGenre" className={styles.msgHide}>
                  No puede eliminarse, el género tiene libros
                </p>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
