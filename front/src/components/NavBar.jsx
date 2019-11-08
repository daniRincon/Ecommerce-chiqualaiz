import React from 'react';
import SearchBar from './SearchBar';
import Greeting from './Greeting';
import { Link } from 'react-router-dom';
import '../css-modules/navBar.module.css'


export default (props) =>{
    return (
        <nav className='navbar navbar-expand-sm'>
            <div className='col-lg-1'>

            </div>
            <SearchBar />
            {props.loggedName
            ?<div>
                <Greeting name={props.loggedName} />   
             </div>
             :
             <div>
                 <button 
                    data-toggle="modal" data-target="#exampleModal"
                    className='btn btn-info'>Login
                </button>
                <button 
                    data-toggle="modal" data-target="#register"
                    className='btn btn-info'>Register
                </button> 
             </div>
            
            
            }
        </nav>
    )
}
