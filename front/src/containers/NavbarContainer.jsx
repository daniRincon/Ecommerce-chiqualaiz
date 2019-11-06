import {connect} from "react-redux"
import NavBarComponent from '../components/NavBar';

const mapStateToProps = (state) => {
  return {
      LoggedName: 'pepito'
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

  const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)
  export default NavbarContainer;