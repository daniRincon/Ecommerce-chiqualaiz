import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default props => {
  if (props.authorized > 1) {
    return (
      <form
        onSubmit={e => {
          props.handleSubmit(e);
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1
                style={{
                  padding: "3%",
                  textAlign: "center"
                }}
              >

                <input  
                    required
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Ingresar titulo"
                    defaultValue={props.selected.titulo || ''}>
                </input>
                <input  
                    required
                    type="text"
                    name="author"
                    className="form-control"
                    placeholder="Ingresar autor"
                    defaultValue={props.selected.author || ''}>
                </input>

              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ textAlign: "center" }}>
              <img
                src="https://images.assetsdelivery.com/compings_v2/mousemd/mousemd1404/mousemd140400053.jpg"
                style={{
                  maxWidth: "auto",
                  height: "60%",
                  borderRadius: "1%"
                }}
              />
              <input
                type="text"
                name="imagen"
                className="form-control"
                placeholder="Ingresar URL imagen"
                defaultValue={props.selected.url || ""}
              ></input>
            </div>
            <div
              className="col p-3 mb-2 bg-dark text-white rounded-lg"
              style={{ textAlign: "center", paddingTop: "30%" }}
            >
              <h3
                style={{
                  padding: "5%"
                }}
              >
                <strong>Sinopsis: </strong>
              </h3>
              <input
                required
                type="text"
                name="description"
                className="form-control"
                placeholder="Ingresar descripcion"
                defaultValue={props.selected.descripcion || ""}
              ></input>

              <div></div>

              <p className="mb-0">
                <strong>Precio: $ </strong>
                <input
                  required
                  type="text"
                  name="precio"
                  className="form-control"
                  placeholder="Ingresar precio"
                  defaultValue={props.selected.precio || ""}
                ></input>
              </p>
              <p className="mb-0">
                <strong>Categorias (Separadas con guión): </strong>
                <input
                  required
                  type="text"
                  name="precio"
                  className="form-control"
                  placeholder="Ingresar categorias"
                  defaultValue={
                    props.selected.genres ? props.selected.genres.join("-") : ""
                  }
                ></input>
              </p>
              <p className="mb-0">
                <strong>Stock: </strong>
                <input 
                    required
                    type="text"
                    name="precio"
                    className="form-control"
                    placeholder="Ingresar categorias"
                    defaultValue={props.selected.stock || 0}>
                </input>
              </p>
              <button type="submit" className="btn btn-primary btn-block">

                  {props.selected.titulo? "editar libro": "crear libro"}
                </button>

              <h5 className="text-danger">{props.warning}</h5>
              <h5 className="text-success">{props.success}</h5>
            </div>
          </div>
          <div className="media-body"></div>
        </div>
      </form>
    );
  } else {

    return (
      <h3 className="text-danger"> ACCESO DENEGADO</h3>
  )

  }
};
