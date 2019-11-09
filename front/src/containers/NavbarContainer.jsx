import {connect} from "react-redux"
import NavBarComponent from '../components/NavBar';
import {userLogOut} from '../store/actions/users'

const mapStateToProps = (state) => {
  return {
      loggedName: state.user.loggedName.name
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogOut: () =>{
      dispatch(userLogOut())
    }
  };
}



  const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)
  export default NavbarContainer;