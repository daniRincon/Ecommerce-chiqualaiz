import React from "react";
import { connect } from "react-redux";
import SearchBarComponent from "../components/SearchBar";
import store from "../store";
import { filterBooks } from "../store/actions/books";

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
    store.dispatch(filterBooks(value, this.props.books));
  }

  handleKeyPress(evt) {
    if (event.key === "Enter" && this.props.filtered.length === 1) {
      this.props.history.push(`/books/${this.props.filtered[0].id}`);
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    store.dispatch(filterBooks(this.state.inputValue, this.props.books));
    const url = this.setParams({ search: this.state.inputValue });
    this.props.history.push(`?${url}`);
  }

  setParams({ search = "" }) {
    const searchParams = new URLSearchParams();
    searchParams.set("search", search);
    return searchParams.toString();
  }

  render() {
    return (
      <div>
        <SearchBarComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default SearchBarContainer = connect()(SearchBarContainer);
