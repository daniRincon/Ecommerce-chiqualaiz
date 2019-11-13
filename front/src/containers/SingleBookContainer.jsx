import React from "react";
import axios from "axios";

import store from '../store/index'
import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";
import { fetchBook, fetchBooks, review } from "../store/actions/books";
import { addCart } from "../store/actions/cart";

class SingleBookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.delBook = this.delBook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  delBook(id) {
    axios
      .delete(`/api/books/${id}`)
      .then(() => {
        this.props.fetchBooks().then(() => this.props.history.push("/"))
      })
      .catch(err => console.error(err));
  }

  handleSubmit(e){
    e.preventDefault();
    store.dispatch(review(e.target[0].value, e.target[1].value, e.target[2].value, this.props.book.id))
    this.props.fetchBook(this.props.match.params.id);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    return (
      <SingleBook
        userId={this.props.userId}
        addBook={this.props.addBookCart}
        deleteBook={this.delBook}
        book={this.props.book}
        history={this.props.history}
        authorized={this.props.authorized}
        cart={this.props.cart}
        reviews={this.props.reviews}
        compras={this.props.userCompras}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({ books, user, cart }) => ({
  book: books.selected,
  authorized: user.loggedName.permisos,
  cart: cart,
  userId: user.loggedName.id,
  reviews: books.selected.reviews,
  userCompras: user.loggedName.compras
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  fetchBook: book => dispatch(fetchBook(book)),
  addBookCart: (book, userId) => dispatch(addCart(book, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookContainer);
