import React from "react";
import Pagination from "react-paginating";
import { Link } from "react-router-dom";
import "../css-modules/Books.module.css";


export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      todosPerPage: 6
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
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.books.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    const renderTodos = currentTodos.map((book, index) => {
      return (
        <div
          key={book.id}
          id="books"
          onClick={() => fetchBook(id)}
          className="col-xs-4 card text-center "
        >
          <Link className="thumbnail" to={`/books/${book.id}`}>
            <img src={book.url} className="img-thumbnail card-img-top" />
            <div className="caption card-body">
              <h5>
                <span className="card-text">{book.titulo}</span>
              </h5>
            </div>
            <div>
              <h5>
                <span>Star Rating</span>
              </h5>
            </div>
          </Link>
        </div>
      );
    });
    // Logic for displaying page numbers
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
      <div>
        <ul>{renderTodos}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}
