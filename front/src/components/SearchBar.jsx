import React from "react";

export default ({ handleChange, handleSubmit, handleKeyPress }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        size="30"
        className="form-control"
        type="search"
        placeholder="Search"
        name="search"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </form>
  );
};
