import React from "react";
import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";
import { fetchBook, truncarDescripcion } from "../store/actions/books";

class SingleBookContainer extends React.Component {
  
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    return <SingleBook book={this.props.book} history={this.props.history} authorized={this.props.authorized}/>
  }
}

const mapStateToProps = ({ books, user }) => ({
  book: books.selected,
  authorized: user.loggedName.permisos,
});

const mapDispatchToProps = dispatch => ({
  fetchBook: book => dispatch(fetchBook(book)),
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookContainer);
