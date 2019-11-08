import React from "react";
import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";
import { fetchBook, truncarDescripcion } from "../store/actions/books";

class SingleBookContainer extends React.Component {
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    return <SingleBook book={this.props.book}/>
  }
}

const mapStateToProps = ({ books }) => ({
  book: books.selected
});

const mapDispatchToProps = dispatch => ({
  fetchBook: book => dispatch(fetchBook(book)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookContainer);
