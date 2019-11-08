import React from "react";
import Pagination from "react-paginating";
import { Link } from "react-router-dom";
import "../css-modules/Books.module.css";
export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      todosPerPage: 8
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { currentPage, todosPerPage } = this.state;
    let renderTodos;
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.books.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.books.length / todosPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button key={number} id={number} onClick={this.handleClick}>
          {number}
        </button>
      );
    });
    return (
      <div className="container">
        <div className="row">
          {
            (renderTodos = currentTodos.map((book, index) => {
              return (
                <div
                  key={book.id}
                  id="books"
                  onClick={() => fetchBook(id)}
                  className="col-md-3 mb-2 ajusteCard"
                >
                  <Link className=" text-dark enlace" to={`/books/${book.id}`}>
                    <div className="card text-center img ">
                      <img src={book.url} className="classImg" />

                      <span className="descriptions">{book.titulo}</span>

                      <div className="descriptions">Star Rating</div>
                    </div>
                  </Link>
                </div>
              );
            }))
          }
          <div>
            <ul id="page-numbers">{renderPageNumbers}</ul>
          </div>
        </div>
      </div>
    );
  }
}

/* import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css-modules/Books.module.css";

export default ({ books, fetchBooks, fetchBook }) => {
  useEffect(() => {
    fetchBooks();
  }, []);
  return (

    <div className="container ">
      <div className="row">
        {books.map(book => (
          <div
            key={book.id}
            id="books"
            onClick={() => fetchBook(id)}
            className="col-md-3 mb-2 ajusteCard"
          >
            <Link className=" text-dark enlace" to={`/books/${book.id}`}>
              <div className="card text-center img ">
                <img src={book.url} className="classImg" />

                <span className="descriptions">{book.titulo}</span>

                <div className="descriptions">Star Rating</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}; */
