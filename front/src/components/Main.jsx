import React from 'react';
import { Route } from 'react-router-dom';

import store from '../store/index';

import NavBarContainer from '../containers/NavbarContainer';


export default() => {
    return (
        <div id='main'>
            <Route path='/' component={NavBarContainer} />
        </div>
    )
}