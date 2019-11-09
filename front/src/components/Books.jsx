import React from "react";
import Pagination from "react-paginating";
import { Link } from "react-router-dom";
import "../css-modules/Books.module.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const queryString = require("query-string");

export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      todosPerPage: 8
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  handleClick(event) {
    this.setState(
      {
        currentPage: Number(event.target.id)
      },
      () => {
        const url = this.setParams({ page: this.state.currentPage });
        this.props.history.push(`?${url}`);
      }
    );
  }
  handleNext(event) {
    this.state.currentPage <
    Math.ceil(this.props.books.length / this.state.todosPerPage)
      ? this.setState(
          {
            currentPage: this.state.currentPage + 1
          },
          () => {
            const url = this.setParams({ page: this.state.currentPage });
            this.props.history.push(`?${url}`);
          }
        )
      : null;
  }
  handlePrevious(event) {
    this.state.currentPage > 1
      ? this.setState(
          {
            currentPage: this.state.currentPage - 1
          },
          () => {
            const url = this.setParams({ page: this.state.currentPage });
            this.props.history.push(`?${url}`);
          }
        )
      : null;
  }
  setParams({ page = "" }) {
    const searchParams = new URLSearchParams();
    searchParams.set("page", page);
    return searchParams.toString();
  }
  componentDidMount() {
    this.props.fetchBooks();
    const { page } = queryString.parse(this.props.location.search);
    this.setState({
      currentPage: page || 1
    });
  }
  render() {
    const { currentPage, todosPerPage } = this.state;
    let renderTodos;
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    let renderedBooks;
    renderedBooks =
      this.props.filtered.length !== 0 ? this.props.filtered : this.props.books;
    const currentTodos = renderedBooks.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(renderedBooks.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={`page-item ${
            number === this.state.currentPage ? "active" : ""
          }`}
          key={number}
        >
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
                  className="col-md-3 mb-2 ajusteCard"
                >
                  <Link className=" text-dark enlace" to={`/books/${book.id}`}>
                    <div className="card text-center img ">
                      <img src={book.url} className="classImg" />

                      <span className="descriptions">{book.titulo}</span>
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
                        <div className="align-bottom">
                          <strong>Precio:</strong>
                          <span>${book.precio}</span>
                        </div>
                      </Box>
                    </div>
                  </Link>
                </div>
              );
            }))
          }
          <nav aria-label="Books navigation" className="container">
            <ul id="page-numbers" className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" onClick={this.handlePrevious}>
                  Previous
                </a>
              </li>
              {renderPageNumbers}
              <li className="page-item">
                <a className="page-link" onClick={this.handleNext}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
