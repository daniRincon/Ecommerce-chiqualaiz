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

  cancelButton() {
    $("#addButton").click(function() {
      $(this)
        .prop("disabled", true)
        .text("Added to Cart");
    });
  }

  render() {
    return (
      <SingleBook
        addBook={this.props.addBookCart}
        deleteBook={this.delBook}
        book={this.props.book}
        history={this.props.history}
        authorized={this.props.authorized}
        cancelButton={this.cancelButton}
      />
    );
  }
}

const mapStateToProps = ({ books, user }) => ({
  book: books.selected,
  authorized: user.loggedName.permisos
});

const mapDispatchToProps = dispatch => ({
  fetchBook: book => dispatch(fetchBook(book)),
  addBookCart: book => dispatch(addCart(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookContainer);
