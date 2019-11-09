import React from "react";

export default props => {
  return (
    <form className="bar col-lg-5" style={{
      backgroundColor:"green"
      }}>
      <input
        size="30"
        className="form-control"
        type="search"
        placeholder="Search"
        name="search"
      ></input>
    </form>
  );
};
