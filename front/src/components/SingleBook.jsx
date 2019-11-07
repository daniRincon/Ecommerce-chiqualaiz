import React, { useEffect } from "react";
import '../css-modules/singlePage.module.css';

export default ({ books, fetchBook }) => {
  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <div className="container">
      <div className="imgContainer">
        <h1>{books.titulo}</h1>
        <h3>{books.autor}</h3>
        <img src={books.url} style={{
            width: "20%",
            height: "auto"
        }} />
      </div>
      <div className="description">
        <p>{books.descripcion}</p>
        <p>{books.precio}</p>
        <p>{books.estrellas}</p>
        {console.log(books)}
      </div>
    </div>
  );
};



