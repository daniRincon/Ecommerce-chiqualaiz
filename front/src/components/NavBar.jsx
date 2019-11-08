import React from 'react';
import SearchBar from './SearchBar';
import Greeting from './Greeting';
import '../css-modules/navBar.module.css'


export default (props) =>{
    return (
        <nav className='navbar navbar-expand-sm'>
            <div className='col-lg-1'>

            </div>
            <SearchBar />
            {props.loggedName
            ?<div className='col-lg-4 login'>
                <Greeting name={props.loggedName} />   
             </div>
             :
             <div className='col-lg-4 login'>
                    <button 
                    data-toggle="modal" data-target="#exampleModal"
                    className='btn btn-info'>Login</button> 
            </div>
            } 
        </nav>
    )
}
