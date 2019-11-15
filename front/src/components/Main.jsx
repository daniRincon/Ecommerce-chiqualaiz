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
import AddGenreContainer from "../containers/AddGenreContainer";
import EditGenreContainer from "../containers/EditGenreContainer";
import KartContainer from "../containers/KartContainer";
import CheckoutContainer from "../containers/CheckoutContainer";
import PermissionsContainer from "../containers/PermissionsContainer";
import HistorialContainer from "../containers/HistorialContainer";
import EditProfileContainer from "../containers/EditProfileContainer";
import AdminOrdersContainer from "../containers/AdminOrdersContainer";


import { fetchUser } from "../store/actions/users";
import PedidoContainer from "../containers/PedidoContainer";

export default () => {
  useEffect(() => {
    store.dispatch(fetchUser());
  });

  return (
    <div id="main">
      <Route path="/" component={NavBarContainer} />
      <Route path="/" component={KartContainer} />
      <Route path="/" component={HistorialContainer} />
      <Route exact path="/books/:id" component={SingleBookContainer} />
      <Route exact path="/" component={BooksContainer} />
      <Route path="/" component={LoginContainer} />
      <Route path="/" component={RegisterContainer} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/dashboard/add" component={AddBookContainer} />
      <Route exact path="/dashboard" component={AddGenreContainer} />
      <Route
        exact
        path="/dashboard/adminOrders"
        component={AdminOrdersContainer}
      />
      <Route
        exact
        path="/dashboard/permisos"
        component={PermissionsContainer}
      />
      <Route exact path="/editprofile" component={EditProfileContainer} />
      <Route exact path="/dashboard" component={EditGenreContainer} />
      <Route exact path="/books/:id/edit" component={AddBookContainer} />
      <Route exact path="/checkout" component={CheckoutContainer} />
      <Route exact path="/pedido/:id" component={PedidoContainer} />
    </div>
  );
};
