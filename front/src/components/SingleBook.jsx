import React, { useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default ({ books, fetchBook, truncarDescripcion }) => {
  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1
            style={{
              padding: "3%",
              textAlign: "center"
            }}
          >
            {books.titulo}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src={books.url}
            style={{
              maxWidth: "auto",
              height: "100%",
              borderRadius: "1%"
            }}
          />
        </div>
        <div
          className="col p-3 mb-2 bg-dark text-white rounded-lg"
          style={{ textAlign: "center", paddingTop: "30%" }}
        >
          <p
            style={{
              padding: "5%"
            }}
          >
            <h3>
              <strong>Sinopsis: </strong>
            </h3>
            {books.descripcion ? truncarDescripcion(books.descripcion) : ""}
          </p>
          <p
            style={{
              padding: "5%"
            }}
          >
            <div>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">
                  <strong>Rating:</strong>
                </Typography>
                <Rating name="customized-10" value={books.estrellas} max={10} />
              </Box>
            </div>
          </p>
          <p className="mb-0">
            <strong>Precio: $ </strong>
            {books.precio}
          </p>
        </div>
      </div>
      <div className="media-body"></div>
    </div>
  );
};
