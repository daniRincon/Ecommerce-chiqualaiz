import React from 'react';
import SearchBar from './SearchBar';
import Greeting from './Greeting';
import { Link } from 'react-router-dom';

export default (props) =>{
    return (
        <nav className='navbar navbar-expand-sm bg-light'>
            <SearchBar />
            {props.LoggedName
            ?<div>
            <Link>
                <button className='btn btn-danger'>Logout</button>
                <Greeting name={props.LoggedName} />
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