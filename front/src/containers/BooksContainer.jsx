import { connect } from "react-redux";
import Books from "../components/Books";
import { fetchBooks, fetchBook } from "../store/actions/books";
import { addCart } from "../store/actions/cart";

const mapStateToProps = ({ books }) => ({
  books: books.list,
  filtered: books.filtered,
  emptySearch: books.emptySearch
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  fetchBook: id => dispatch(fetchBook(id)),
  addBook: book => dispatch(addCart(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
