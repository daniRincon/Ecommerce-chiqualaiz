import React from 'react';
import { Route } from 'react-router-dom';

import SingleBookContainer from '../containers/SingleBookContainer';
import NavBarContainer from '../containers/NavbarContainer';


export default() => {
    return (
        <div id='main'>
            <Route path='/' component={NavBarContainer} />
            <Route path='' component={SingleBookContainer}/>
        </div>
    )
}