import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export default ({ book, authorized, history, deleteBook, addBook, cart }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (cart[book.id]) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  const truncarDescripcion = (descripcion, length) => {
    return descripcion.substr(0, length) + "...";
  };

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  }));

  const classes = useStyles();
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
            {book.titulo}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ textAlign: "center" }}>
          <img
            src={book.url}
            style={{
              maxWidth: "auto",
              height: "100%",
              borderRadius: "1%"
            }}
          />
        </div>
        <div
          id="divContainer"
          className="col p-3 mb-2 bg-light text-dark rounded-lg"
          style={{ textAlign: "center", paddingTop: "30%" }}
        >
          <h3
            style={{
              padding: "5%"
            }}
          >
            <strong>Sinopsis: </strong>
          </h3>
          {book.descripcion ? truncarDescripcion(book.descripcion, 50) : ""}

          <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">
                <strong>Rating:</strong>
              </Typography>
              <Rating
                name="half-rating"
                value={book.estrellas / 2}
                max={5}
                precision={0.5}
                readOnly
              />
            </Box>
          </div>

          <div
            style={{
              padding: "5%"
            }}
            className="mb-0"
          >
            <strong>Precio: $ </strong>
            {book.precio}
          </div>

          <Button
            disabled={disabled}
            id="addButton"
            onClick={() => {
              addBook({
                id: book.id,
                precio: book.precio,
                titulo: book.titulo
              });
              $("#slider").addClass("open");
            }}
          >
            {disabled ? (
              <FontAwesomeIcon
                style={{
                  margin: "10%",
                  color: "#5588a3"
                }}
                size="2x"
                variant="contained"
                className={classes.button}
                icon={faMinusCircle}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                style={{
                  margin: "10%",
                  color: "#5588a3"
                }}
                size="2x"
                variant="contained"
                className={classes.button}
                icon={faCartPlus}
              ></FontAwesomeIcon>
            )}
          </Button>
          {authorized > 1 ? (
            <div>
              <Button
                onClick={() => {
                  history.push("/books/" + book.id + "/edit");
                }}
                variant="contained"
                className={classes.button}
                style={{
                  margin: "1%"
                }}
              >
                Editar
              </Button>

              <Button
                onClick={() => {
                  deleteBook(book.id);
                }}
                variant="contained"
                className={classes.button}
                style={{
                  margin: "1%"
                }}
              >
                {" "}
                Eliminar
              </Button>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
      <div className="media-body"></div>
    </div>
  );
};
