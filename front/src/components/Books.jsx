import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css-modules/Books.module.css";

export default ({ books, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="books">
      <h3>BOOKS</h3>
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-xs-4">
            <Link className="thumbnail" to={`/books/${book.id}`}>
              <img src={book.url} className="img-thumbnail" />
              <div className="caption">
                <h5>
                  <span>{book.titulo}</span>
                </h5>
              </div>
              <div>
                <h5>
                  <span>Star Rating</span>
                </h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
