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
      <Route path="/book" component={SingleBookContainer} />
    </div>
  );
};
=======
export default() => {
    return (
        <div id='main'>
            <Route path='/' component={NavBarContainer} />
            <Route exact path='/' component={BooksContainer}/>
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/register' component={RegisterContainer}/>
            <Route path='/book' component={SingleBookContainer}/>
        </div>
    )
}
>>>>>>> 9fb269c7039cd22c781b9cda572754f8afb71c5c
