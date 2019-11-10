import { connect } from "react-redux";
import NavBarComponent from "../components/NavBar";
import { userLogOut } from "../store/actions/users";
import { fetchGenre } from '../store/actions/books'


const mapStateToProps = ({ user, books, genres }) => {
  return {
    loggedName: user.loggedName.name,
    books: books.list,
    genres: genres.AllGenres
  };
};

const mapDispatchToProps = dispatch => ({
  handleLogOut: () => dispatch(userLogOut()),
  fetchGenre: () => dispatch(fetchGenre())
});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);
export default NavbarContainer;
