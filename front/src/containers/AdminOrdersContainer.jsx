import React, { Component } from "react";
import AdminOrders from "../components/AdminOrders";
import { fetchAdminOrders } from "../store/actions/users";
import { connect } from "react-redux";
import { userHistorial } from "../store/actions/users";

class AdminOrdersContainer extends Component {


  componentDidMount() {
    this.props.fetchAdminOrders();
  }

  render() {
    return (
      <div>
        <AdminOrders
          adminOrders={this.props.adminOrders}
          books={this.props.books}
          authorized={this.props.authorized}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ user, books }) => ({
  adminOrders: user.adminHistorial,
  books: books.list,
  authorized: user.loggedName.permisos
});

const mapDispatchToProps = dispatch => ({
  fetchAdminOrders: () => dispatch(fetchAdminOrders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminOrdersContainer);
