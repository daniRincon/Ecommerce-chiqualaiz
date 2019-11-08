import React from "react";
import { connect } from "react-redux";
import Books from "../components/Books";
import { fetchBooks, fetchBook } from "../store/actions/books";

const mapStateToProps = ({ books }) => ({
  books: books.list
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  fetchbook: id => dispatch(fetchbook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
