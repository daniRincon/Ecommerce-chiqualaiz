import React from 'react';
import { Route } from 'react-router-dom';

import SingleBookContainer from '../containers/SingleBookContainer';
import NavBarContainer from '../containers/NavbarContainer';

import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer'

export default() => {
    return (
        <div id='main'>
            <Route path='/' component={NavBarContainer} />
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/register' component={RegisterContainer}/>
            <Route path='/book' component={SingleBookContainer}/>
        </div>
    )
}