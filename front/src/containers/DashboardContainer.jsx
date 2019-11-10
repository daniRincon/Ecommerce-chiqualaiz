import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";


const mapStateToProps = (state) => ({
  authorized: state.user.loggedName.permisos
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
