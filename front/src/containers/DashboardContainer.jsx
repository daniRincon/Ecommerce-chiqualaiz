import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import { fetchBooks } from "../store/actions/books";


const mapStateToProps = (state) => ({
  authorized: state.user.loggedName.permisos
});

const mapDispatchToProps = dispatch => ({
  fetchBooks:() => dispatch(fetchBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
