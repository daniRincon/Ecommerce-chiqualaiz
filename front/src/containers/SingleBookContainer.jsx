import React from "react";
import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";

const mapStateToProps = ({ books }) => ({
  book: books.selected
});

export default connect(mapStateToProps)(SingleBook);
