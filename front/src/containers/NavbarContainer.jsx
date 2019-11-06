import {connect} from "react-redux"
import NavBarComponent from '../components/NavBar';

const mapStateToProps = (state) => {
  console.log(state)
  return {
      //loggedName: state.loggedName
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

  const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)
  export default NavbarContainer;