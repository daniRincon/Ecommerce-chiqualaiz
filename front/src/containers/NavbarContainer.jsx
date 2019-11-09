import { connect } from "react-redux";
import NavBarComponent from "../components/NavBar";
import { userLogOut } from "../store/actions/users";

const mapStateToProps = ({ user, books }) => {
  return {
    loggedName: user.loggedName.name,
    books: books.list,
    filtered: books.filtered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogOut: () => {
      dispatch(userLogOut());
    }
  };
};

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);
export default NavbarContainer;
