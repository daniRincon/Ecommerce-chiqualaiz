import React from "react";
import axios from "axios";
import EditGenre from "../components/EditGenre";
import { connect } from "react-redux";
import styles from "../css-modules/editGenre.module.css";

class EditGenreContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      selectedGenre: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleSubmit(e, oldGenre, newGenre) {
    e.preventDefault();
    axios
      .patch(`/api/books/genres/${oldGenre}`, { newGenre })
      .then(res => res.data)
      .then(genre => {
        genre[0]
          ? $("#modalGenreEdit").modal("hide") &&
            $("#msgEditGenre").removeClass(styles.msgHide)
          : $("#msgEditGenre").addClass(styles.msgHide);
      })
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

  render() {
    return (
      <EditGenre
        genres={this.props.genres}
        inputValue={this.state.inputValue}
        selectedGenre={this.state.selectedGenre}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleGenreChange={this.handleGenreChange}
      />
    );
  }
}

const mapStateToProps = ({ genres }) => ({
  genres: genres.AllGenres
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditGenreContainer);
