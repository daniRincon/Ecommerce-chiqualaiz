import React from "react";
import { Route } from "react-router-dom";

import BooksContainer from "../containers/BooksContainer";
import SingleBookContainer from "../containers/SingleBookContainer";
import NavBarContainer from "../containers/NavbarContainer";

import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";

export default () => {
  return (
    <div id="main">
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={BooksContainer} />
      <Route path="/" component={LoginContainer} />
      <Route path="/" component={RegisterContainer} />
      <Route path="/books/:id" component={SingleBookContainer} />
    </div>
  );
};
