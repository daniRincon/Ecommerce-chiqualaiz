import React from "react";
import Pagination from "react-paginating";

const fruits = [
  ["apple", "orange"],
  ["banana", "avocado"],
  ["coconut", "blueberry"],
  ["payaya", "peach"],
  ["pear", "plum"]
];

export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //todos: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
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

  /*constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page, e) {
    this.setState({
      currentPage: page
    });
  }*/

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
      return <li key={book.id}>{book.url}</li>;
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

/* render() {
    const total = this.props.books.length * limit;
    console.log(this.props);
    const { currentPage } = this.state;

    return (
      <div>
        <ul>
          {this.props.books.length !== 0
            ? this.props.books.map((book,index) => {
              index===currentPage
            <li key={book.id}>{book.url}</li>
          
          })
            : ""}
        </ul>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div>
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {"<"}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#fdce09" };
                }
                return (
                  <button
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {">"}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}
*/
/*
import React from "react";
import { useEffect } from "react";
import render from "react-dom";
import { Link } from "react-router-dom";
import Pagination from "react-paginating";

const fruits = [
  ["apple", "orange"],
  ["banana", "avocado"],
  ["coconut", "blueberry"],
  ["payaya", "peach"],
  ["pear", "plum"]
];
const limit = 6;
const pageCount = 3;
const total = props.books.length * limit;

export class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    props.fetchBooks();
  }

  handlePageChange(page, e) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    const { currentPage } = this.state;
    return (
      <div>
        <ul>
          {fruits[currentPage - 1].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div>
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {"<"}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#fdce09" };
                }
                return (
                  <button
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {">"}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}
*/
