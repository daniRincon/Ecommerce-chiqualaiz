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

  handleSubmit(e, value, content, alias){
    e.preventDefault();
    store.dispatch(review(value, content, alias, this.props.book.id))
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
        userReviews={this.props.userReviews}
        reviewIds={this.props.reviewIds}
      />
    );
  }
}

const mapStateToProps = ({ books, user, cart }) =>{ 
  let reviews = books.selected.reviews || [];
  let reviewIds = reviews.map((review) => review.id) 
  reviewIds = reviewIds || [];
  let userReviews = user.loggedName.reviews || [];
return ({
  book: books.selected,
  authorized: user.loggedName.permisos,
  cart: cart,
  userId: user.loggedName.id,
  reviews,
  userCompras: user.loggedName.compras,
  userReviews,
  reviewIds
})};

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  fetchBook: book => dispatch(fetchBook(book)),
  addBookCart: (book, userId) => dispatch(addCart(book, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookContainer);
