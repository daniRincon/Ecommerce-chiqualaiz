import { connect } from "react-redux";
import Books from "../components/Books";
import { fetchBooks, fetchBook } from "../store/actions/books";
import { addCart } from "../store/actions/cart";

const mapStateToProps = ({ books, cart, user }) => ({
  books: books.list,
  filtered: books.filtered,
  emptySearch: books.emptySearch,
  cart: cart,
  book: books.selected,
  userId: user.loggedName.id
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  fetchBook: id => dispatch(fetchBook(id)),
  addBook: (book, userId) => {
    dispatch(addCart(book, userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
