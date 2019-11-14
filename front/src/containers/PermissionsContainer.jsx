import { connect } from "react-redux";
import { fetchUsers, delUsers, changePermission } from "../store/actions/users";
import Permissions from "../components/Permissions";

const mapStateToProps = ({ user }) => ({
  users: user.list,
  authorized: user.loggedName.permisos
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  delUsers: arrId => dispatch(delUsers(arrId)),
  changePermission: ([value, id]) => dispatch(changePermission([value, id]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Permissions);
