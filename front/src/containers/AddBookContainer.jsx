import React from "react";
import AddBook from "../components/addBook";
import { connect } from "react-redux";
import { addBook, updateBook } from "../store/actions/books"

class addBookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: "",
      success: "",
      authorized: props.authorized,
      selected: props.selected
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if(!this.props.selected.titulo){
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
    }else{
      this.props.updateBookDb({
        id: this.state.selected.id, 
        authorId: this.state.selected.authorId,
        title: e.target[0].value,
        author: e.target[1].value,
        imgUrl: e.target[2].value,
        descripcion: e.target[3].value,
        precio: e.target[4].value
      })
      .then((book) =>{
        this.props.history.push('/books/' + this.state.selected.id)
      })
      .catch(() => {
        this.setState({warning : 'There was a problem. Book not edited.', success: ''})
      });
    }
  }

  render() {
    return (
      <AddBook
        handleSubmit={this.handleSubmit}
        warning={this.state.warning}
        success={this.state.success}
        authorized={this.state.authorized}
        selected={this.state.selected}
      />
    );
  }
}
const mapStateToProps = ({user, books}) => ({
  authorized: user.loggedName.permisos,
  selected : books.selected
});

const mapDispatchToProps = dispatch => ({
  addBookDb: book => dispatch(addBook(book)),
  updateBookDb: book => dispatch(updateBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addBookContainer);