import React from "react";
import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";
import { fetchBook, truncarDescripcion } from "../store/actions/books";
import { fetchUser } from "../store/actions/users";

class SingleBookContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
    this.props.fetchUser();
  }

  render() {
    return <SingleBook book={this.props.book} />;
  }
}

const mapStateToProps = ({ books }) => ({
  book: books.selected
});

const mapDispatchToProps = dispatch => ({
  fetchBook: book => dispatch(fetchBook(book)),
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookContainer);
