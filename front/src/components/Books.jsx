import React from "react";
import Pagination from "react-paginating";
import { Link } from "react-router-dom";
import "../css-modules/Books.module.css";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

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
        <li className="page-item" key={number}>
          <a className="page-link" id={number} onClick={this.handleClick}>
            {number}
          </a>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {
            (renderTodos = currentTodos.map(book => {
              return (
                <div
                  key={book.id}
                  id="books"
                  onClick={() => this.props.fetchBook(book.id)}
                  className="col-md-3 mb-2 ajusteCard"
                >
                  <Link className=" text-dark enlace" to={`/books/${book.id}`}>
                    <div className="card text-center img ">
                      <img src={book.url} className="classImg" />

                      <span className="descriptions">{book.titulo}</span>
                      <span>$ {book.precio}</span>
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Rating
                          name="half-rating"
                          value={book.estrellas / 2}
                          max={5}
                          precision={0.5}
                          readOnly
                        />
                      </Box>
                    </div>
                  </Link>
                </div>
              );
            }))
          }
          <nav aria-label="Books navigation" className="container">
            <ul id="page-numbers" className="pagination justify-content-center">
              {renderPageNumbers}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
