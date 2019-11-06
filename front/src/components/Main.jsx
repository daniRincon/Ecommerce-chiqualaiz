import React from 'react';
import { Route } from 'react-router-dom';

import SingleBookContainer from '../containers/SingleBookContainer';
import NavBarContainer from '../containers/NavbarContainer';

import NavBarContainer from '../containers/NavbarContainer';
import LoginContainer from '../containers/LoginContainer';


export default() => {
    return (
        <div id='main'>
            <Route path='/' component={NavBarContainer} />
            <Route exact path='/login' component={LoginContainer} />
<<<<<<< HEAD
=======
            <Route path='' component={SingleBookContainer}/>
>>>>>>> 50202b25af0a328107076cf948628d6ba513cc10
        </div>
    )
}