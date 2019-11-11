import React from "react";
import { shadows } from '@material-ui/system';

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Reviews from "./Reviews"
export default ({ book, authorized, history, deleteBook,addBook }) => {
  
  const truncarDescripcion = (descripcion, length) => {
   return descripcion.substr(0, length) + "...";
}
  
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    },
    reviews: {
      display: "flex", justifyContent: "flex-end"
    },
    container:{
      display: "flex",
      paddingTop: "3%",
      justifyContent: "center"
    }
  }));
  
  const classes = useStyles();
  return (
    <Box
    width="75%"
    boxShadow={3}
    bgcolor="background.paper"
    mx="auto" 
    p={1}
    className= {classes.container}
  >

    <div className="container">
      <div className="row">
        <div className="col">
      
        </div>
      </div>
      <div className="row">
        <div className="col" >
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
          <h1> {book.titulo}</h1>
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
          <Button  onClick={() => {
                    history.push('/')}
                    } variant="contained" className={classes.button} style={{
            margin:"1%"
          }}>
        Home
      </Button>
      <Button style={{
                  margin:"1%"
              }} 
              variant="contained" 
              onClick={ () => {
                      addBook({id: book.id, precio: book.precio, titulo: book.titulo})
                    }}
              className={classes.button}>
                          +
      </Button>
      {authorized > 1
          ? <div>
              <Button onClick={() => {
              history.push('/books/' + book.id + '/edit')}
              }  variant="contained" className={classes.button} style={{
              margin:"1%"
            }}> Editar</Button>

            <Button onClick={() => { deleteBook(book.id)}}  
            variant="contained" className={classes.button} style={{
              margin:"1%"
            }}> Eliminar</Button>
          </div>
          : false
          }
        </div>
      </div>
      <div className="media-body"></div>
      <div className={classes.reviews}>
        
      <Reviews/>

      </div>
    </div>
    </Box>
  );
};
