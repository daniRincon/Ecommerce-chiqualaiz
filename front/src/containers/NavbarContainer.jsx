import { connect } from "react-redux";
import NavBarComponent from "../components/NavBar";
import { userLogOut } from "../store/actions/users";


import { fetchGenre, filterBooks, filteredGenres } from '../store/actions/books'



const mapStateToProps = ({ user, books, genres }) => {
  return {
    loggedName: user.loggedName,
    books: books.list,
    genres: genres.AllGenres,
    filtered: books.filtered
  };
};

const mapDispatchToProps = dispatch => ({
  handleLogOut: (id) => dispatch(userLogOut(id)),
  fetchGenre: () => dispatch(fetchGenre()),
  filterBooks: () => dispatch(filterBooks()),
  filteredGenres: (genres) => dispatch(filteredGenres(genres))
});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);
export default NavbarContainer;
