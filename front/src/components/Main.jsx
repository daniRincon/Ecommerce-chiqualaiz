import React from "react";
import { Route, Redirect } from "react-router-dom";

import BooksContainer from "../containers/BooksContainer";
import SingleBookContainer from "../containers/SingleBookContainer";
import NavBarContainer from "../containers/NavbarContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import DashboardContainer from "../containers/DashboardContainer";

export default () => {
  return (
    <div id="main">
      <Route path="/" component={NavBarContainer} />
      <Route path="/books/:id" component={SingleBookContainer} />
      <Route exact path="/" component={BooksContainer} />
      <Route path="/" component={LoginContainer} />
      <Route path="/" component={RegisterContainer} />
      <Route exact path="/dashboard" component={DashboardContainer} />
    </div>
  );
};
