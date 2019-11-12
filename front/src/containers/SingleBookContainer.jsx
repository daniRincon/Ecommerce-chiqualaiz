import React from "react";
import axios from "axios";

import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";
import { fetchBook } from "../store/actions/books";
import { addCart } from "../store/actions/cart";

class SingleBookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.delBook = this.delBook.bind(this);
  }

  delBook(id) {
    axios
      .delete(`/api/books/${id}`)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    return (
      <SingleBook
        addBook={this.props.addBookCart}
        deleteBook={this.delBook}
        book={this.props.book}
        history={this.props.history}
        authorized={this.props.authorized}
        cart={this.props.cart}
      />
    );
  }
}

const mapStateToProps = ({ books, user, cart }) => ({
  book: books.selected,
  authorized: user.loggedName.permisos,
  cart: cart,
  userId: user.loggedName.id
});

const mapDispatchToProps = dispatch => ({
  fetchBook: book => dispatch(fetchBook(book)),

  addBookCart: (book, userId) => dispatch(addCart(book, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookContainer);
