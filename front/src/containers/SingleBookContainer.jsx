import React from "react";
import SingleBook from "../components/SingleBook";
import { connect } from 'react-redux'
import { fetchBook } from '../store/actions/books'

const mapStateToProps = ({ book }) => ({
  book: book.selected,
})

const mapDispatchToProps = dispatch => ({
  fetchBook: (book) => dispatch(fetchBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook)
