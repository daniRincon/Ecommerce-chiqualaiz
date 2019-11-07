import React from "react";
import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";

const mapStateToProps = ({ book }) => ({
  book: book.selected
});

export default connect(mapStateToProps)(SingleBook);

