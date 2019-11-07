import React from "react";
import { Route } from "react-router-dom";

import BooksContainer from "../containers/BooksContainer";
import SingleBookContainer from "../containers/SingleBookContainer";
import NavBarContainer from "../containers/NavbarContainer";

import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";

<<<<<<< HEAD
export default () => {
  return (
    <div id="main">
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={BooksContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/register" component={RegisterContainer} />
      <Route path="/books" component={SingleBookContainer} />
    </div>
  );
};
=======
export default() => {
    return (
        <div id='main'>
            <Route path='/' component={NavBarContainer} />
            <Route path='/' component={LoginContainer} />
            <Route path='/' component={RegisterContainer}/>
            <Route path='/book' component={SingleBookContainer}/>
        </div>
    )
}
>>>>>>> 0420dff1fa312328af60116097d18fe8a2e1cd01
