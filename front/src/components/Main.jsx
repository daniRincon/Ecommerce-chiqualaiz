import React from 'react';
import { Route } from 'react-router-dom';

import SingleBookContainer from '../containers/SingleBookContainer';


export default() => {
    return (
        <div id='main'>
            <SingleBookContainer/>
        </div>
    )
}