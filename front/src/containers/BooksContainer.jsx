import React from "react";
import { connect } from "react-redux";
import Books from "../components/Books";

const mapStateToProps = ({ books }) => ({
  books: books.list
});

export default connect(mapStateToProps)(Books);
