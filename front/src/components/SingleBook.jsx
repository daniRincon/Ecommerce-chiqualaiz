import React, { useEffect } from "react";
import stars from "../assets/stars.png";
import "../css-modules/singlePage.module.css";

export default ({ books, fetchBook, truncarDescripcion }) => {
  useEffect(() => {
    fetchBook();
  }, []);
  return (
    //   <div>
    //   <h1></h1>
    //   <div className="container">
    //   <div className="imgContainer">
    //     <h3>{books.autor}</h3>
    //     <img className="img-thumbnail" src={books.url} />
    //   </div>
    //   <div className="description">
    //     <p>{books.descripcion}</p>
    //     <p></p>
    //     <p></p>
    //     {console.log(books)}
    //   </div>
    // </div>
    // </div>
    <div className="media">
      <img src={books.url} className="align-self-center mr-3" />
      <div className="media-body">
        <h1 className="mt-0">{books.titulo}</h1>
        <p>
          <strong>Sinopsis:</strong>
          {books.descripcion ? truncarDescripcion(books.descripcion) : ""}
        </p>
        <p>
          <strong>Rating:</strong>
          <img src={stars} id="stars" />
          {books.estrellas}
        </p>
        <p className="mb-0">
          <strong>Precio:</strong>
          {books.precio}
        </p>
      </div>
    </div>
  );
};
