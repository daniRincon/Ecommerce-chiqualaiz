import React from "react";
import axios from "axios";
import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";
import { fetchBook, fetchBooks, review } from "../store/actions/books";
import { addCart } from "../store/actions/cart";

class SingleBookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.delBook = this.delBook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      required : false
    }
  }

  delBook(id) {
    axios
      .delete(`/api/books/${id}`)
      .then(() => {
        this.props.fetchBooks().then(() => this.props.history.push("/"))
      })
      .catch(err => console.error(err));
  }

  handleSubmit(e, value, content, alias, id){
    e.preventDefault();
    if (value) {
      this.props.review(value, content, alias, id)
      this.props.history.push('/')
    } else {
      this.setState({
        required: true
      })
    }
   
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    return (
      <SingleBook
        required={this.state.required}
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
  review: (value, content, alias, id) => dispatch(review(value, content, alias, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookContainer);
