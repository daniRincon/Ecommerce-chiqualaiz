import React from "react";
import AddBook from "../components/addBook";
import { connect } from "react-redux";
import { addBook } from "../store/actions/books"

class addBookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: "",
      success: "",
      authorized: props.authorized
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addBookDb({
      title: e.target[0].value,
      author: e.target[1].value,
      imgUrl: e.target[2].value,
      descripcion: e.target[3].value,
      precio: e.target[4].value
    })
    .then(() =>{
       this.setState({success: 'Book created and added to the database!', warning: ""})
    })
    .catch(() => {
      this.setState({warning : 'There was a problem. Book not added.', success: ''})
    });
  }

  render() {
    return (
      <AddBook
        handleSubmit={this.handleSubmit}
        warning={this.state.warning}
        success={this.state.success}
        authorized={this.state.authorized}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  authorized: state.user.loggedName.permisos
});

const mapDispatchToProps = dispatch => ({
  addBookDb: book => dispatch(addBook(book)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addBookContainer);
