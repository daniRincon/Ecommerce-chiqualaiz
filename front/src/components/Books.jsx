import React from "react";
import Pagination from "react-paginating";
import { Link } from "react-router-dom";
import store from "../store";
import styles from "../css-modules/Books.module.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { filterBooks } from "../store/actions/books";
import zIndex from "@material-ui/core/styles/zIndex";
const queryString = require("query-string");

export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      todosPerPage: 8,
      maxPage: 1
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
      this.handleUrlNavigation
    );
  }

  handleNext(event) {
    this.state.currentPage < this.state.maxPage
      ? this.setState(
          {
            currentPage: this.state.currentPage + 1
          },
          this.handleUrlNavigation
        )
      : null;
  }
  handlePrevious(event) {
    this.state.currentPage > 1
      ? this.setState(
          {
            currentPage: this.state.currentPage - 1
          },
          this.handleUrlNavigation
        )
      : null;
  }

  handleUrlNavigation() {
    const { search } = queryString.parse(this.props.location.search);
    const url = this.setParams({
      search: search,
      page: this.state.currentPage
    });
    this.props.history.push(`?${url}`);
  }

  setParams({ search = "", page = "" }) {
    const searchParams = new URLSearchParams();
    searchParams.set("search", search);
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

  componentDidUpdate(prevProps) {
    if (prevProps.books.length !== this.props.books.length) {
      const { search } = queryString.parse(this.props.location.search);
      if (search) {
        store.dispatch(filterBooks(search, this.props.books));
      }
      const renderedBooks =
        this.props.filtered.length !== 0 ||
        (this.props.filtered.length === 0 && this.props.emptySearch === true)
          ? this.props.filtered
          : this.props.books;
      const max = Math.ceil(renderedBooks.length / this.state.todosPerPage);
      this.setState({ maxPage: max });
    }
    if (prevProps.filtered.length !== this.props.filtered.length) {
      const renderedBooks =
        this.props.filtered.length !== 0 ||
        (this.props.filtered.length === 0 && this.props.emptySearch === true)
          ? this.props.filtered
          : this.props.books;
      const max = Math.ceil(renderedBooks.length / this.state.todosPerPage);
      this.setState({ maxPage: max });
    }
  }
  render() {
    console.log(this.props)
    const { currentPage, todosPerPage } = this.state;

    let renderTodos;
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    let renderedBooks;
    renderedBooks =
      this.props.filtered.length !== 0 ||
      (this.props.filtered.length === 0 && this.props.emptySearch === true)
        ? this.props.filtered
        : this.props.books;
    const max = Math.ceil(renderedBooks.length / todosPerPage);
    const currentTodos = renderedBooks.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= max; i++) {
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
                  className={"col-md-3 mb-2 " + styles.ajusteCard}
                >
                  <Link
                    className={"text-dark " + styles.enlace}
                    to={`/books/${book.id}`}
                  >
                    <div className={"card " + "text-center " + styles.img}>
                      <img src={book.url} className={styles.classImg} />

                      <span className={styles.descriptions}>{book.titulo}</span>
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
                  <button
                    onClick={() => {
                      this.props.addBook({
                        id: book.id,
                        precio: book.precio,
                        titulo: book.titulo
                      }, this.props.userId);
                    }}
                    className="btn btn-info"
                  >
                    Add to cart
                  </button>
                </div>
              );
            }))
          }
          {max !== 0 ? (
            <nav aria-label="Books navigation" className="container">
              <ul
                id="page-numbers"
                className="pagination justify-content-center"
              >
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
          ) : (
            <div className="container text-center">
              <h1>No se encontraron resultados</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

