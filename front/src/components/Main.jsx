import React from 'react';
import { Route } from 'react-router-dom';

import store from '../store/index';

import NavBarContainer from '../containers/NavbarContainer';
import LoginContainer from '../containers/LoginContainer';


export default() => {
    return (
        <div id='main'>
            <Route path='/' component={NavBarContainer} />
            <Route path='/login' component={LoginContainer} />
        </div>
    )
}