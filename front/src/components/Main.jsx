import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import store from "../store/index";

import BooksContainer from "../containers/BooksContainer";
import SingleBookContainer from "../containers/SingleBookContainer";
import NavBarContainer from "../containers/NavbarContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import DashboardContainer from "../containers/DashboardContainer";
import AddBookContainer from "../containers/AddBookContainer";
import KartContainer from "../containers/KartContainer";

import { fetchUser } from "../store/actions/users";

export default () => {
  useEffect(() => {
    store.dispatch(fetchUser());
  });

  return (
    <div id="main">
      <Route path="/" component={NavBarContainer} />
      <Route path="/" component={KartContainer} />
      <Route exact path="/books/:id" component={SingleBookContainer} />
      <Route exact path="/" component={BooksContainer} />
      <Route path="/" component={LoginContainer} />
      <Route path="/" component={RegisterContainer} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/dashboard/add" component={AddBookContainer} />
      <Route exact path="/books/:id/edit" component={AddBookContainer} />
    </div>
  );
};
