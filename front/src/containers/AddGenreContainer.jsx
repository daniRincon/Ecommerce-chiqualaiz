import React from "react";
import axios from "axios";
import AddGenre from "../components/AddGenre";
import { connect } from "react-redux";
import styles from "../css-modules/addGenre.module.css";

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  addGenre: genre =>
    axios
      .post("/api/books/genres", genre)
      .then(res => res.data)
      .then(genre => {
        console.log(genre);
        genre[1]
          ? $("#modalGenre").modal("hide") &&
            $("#msgAddGenre").addClass(styles.msgHide)
          : $("#msgAddGenre").removeClass(styles.msgHide);
      })
      .catch(err => {
        throw err;
      })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGenre);
