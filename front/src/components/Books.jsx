import React from "react";
import { Link } from "react-router-dom";

export default ({ books }) => (
  <div className="books">
    <h3>BOOKS</h3>
    <div className="row">
      {books.map(book => (
        <div key={book.id} className="col-xs-4">
          <Link className="thumbnail" to={`/books/${book.id}`}>
            <img src={book.url} />
            <div className="caption">
              <h5>
                <span>{book.titulo}</span>
              </h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);
