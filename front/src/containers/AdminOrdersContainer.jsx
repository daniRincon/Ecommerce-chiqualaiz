import React, { Component } from "react";
import AdminOrders from "../components/AdminOrders";
import { fetchAdminOrders } from "../store/actions/users";
import { connect } from "react-redux";
import { userHistorial, setOrderStatus } from "../store/actions/users";

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
          setOrderStatus={this.props.setOrderStatus}
          users={this.props.users}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ user, books }) => ({
  adminOrders: user.adminHistorial,
  users: user.loggedName,
  books: books.list,
  authorized: user.loggedName.permisos
});

const mapDispatchToProps = dispatch => ({
  fetchAdminOrders: () => dispatch(fetchAdminOrders()),
  setOrderStatus: (status, orderId, userId) => dispatch(setOrderStatus(status, orderId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminOrdersContainer);
