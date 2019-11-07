import React from 'react';
import { Route, Switch} from 'react-router-dom';

import SingleBookContainer from '../containers/SingleBookContainer';
import NavBarContainer from '../containers/NavbarContainer';

import LoginContainer from '../containers/LoginContainer';


export default() => {
    return (
        <div id='main'>
            <NavBarContainer/>
            <div>
            <Switch>
            <Route path="/book" component={SingleBookContainer}/>   
            <Route path='/login' component={LoginContainer} />
            </Switch>            
            </div>
            {/* <Route path='/' component={NavBarContainer} /> */}
        </div>
    )
}   