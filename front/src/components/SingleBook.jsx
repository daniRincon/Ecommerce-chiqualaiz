import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
  import Button from "@material-ui/core/Button";

export default ({ book, fetchBook, truncarDescripcion }) => {
  console.log(book);
  
  
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

          <p className="mb-0">
            <strong>Precio: $ </strong>
            {book.precio}
          </p>
          <Button href="/" variant="contained" className={classes.button} style={{
            margin:"20%"
          }}>
        Home
      </Button>
        </div>
      </div>
      <div className="media-body"></div>
      
    </div>
  );
};
