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
            <Link>
                <Greeting name={props.loggedName} />
            </Link>
                
             </div>
             :
            <button 
                    data-toggle="modal" data-target="#exampleModal"
                    className='btn btn-info'>Login</button> 
            }
        </nav>
    )
}
