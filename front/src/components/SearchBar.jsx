import React from "react";

export default ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        size="30"
        className="form-control"
        type="search"
        placeholder="Search"
        name="search"
        onChange={handleChange}
      ></input>
      
    </form>
  );
};
