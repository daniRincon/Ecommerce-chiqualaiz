import React from "react";
import axios from "axios";
import store from "../store/index"
import EditGenre from "../components/EditGenre";
import { connect } from "react-redux";
import styles from "../css-modules/editGenre.module.css";
import { fetchGenre } from "../store/actions/books"

class EditGenreContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      selectedGenre: "",
      updateMsg: "",
      deleteMsg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e, oldGenre, newGenre) {
    e.preventDefault();
    axios
      .patch(`/api/books/genres/${oldGenre}`, { newGenre })
      .then(res => res.data)
      .then(genre => {
        if (genre[0]) {
          $("#modalGenreEdit").modal("hide") &&
            this.setState({
              updateMsg: ""
            });
          this.setState({
            inputValue: "",
            selectedGenre: null
          });
        } else {
          this.setState({
            updateMsg: "No se pudo modificar el género"
          });
        }
      })
      .then(() => {
        return store.dispatch(fetchGenre())})
      
      .catch(err => {
        throw err;
      });
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleGenreChange(e) {
    const value = e.target.value;
    e.preventDefault();
    this.setState({
      selectedGenre: value
    });
    this.setState({
      inputValue: value
    });
  }

  handleDelete(e, genre) {
    const value = e.target.value;
    axios
      .delete(`/api/books/genres/${genre}`)
      .then(res => res.data)
      .then(genre => {
        if (genre) {
          $("#modalGenreEdit").modal("hide");
          this.setState({
            deleteMsg: ""
          });
          this.setState({
            inputValue: ""
          });
        } else {
          this.setState({
            deleteMsg: "No puede eliminarse, el género tiene libros"
          });
        }
      })

      .catch(err => {
        throw err;
      });
  }

  render() {
    return (
      <EditGenre
        genres={this.props.genres}
        inputValue={this.state.inputValue}
        selectedGenre={this.state.selectedGenre}
        deleteMsg={this.state.deleteMsg}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleGenreChange={this.handleGenreChange}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapStateToProps = ({ genres }) => ({
  genres: genres.AllGenres
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditGenreContainer);
