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
            {props.LoggedName
            ?<div>
                <Link>
                    <button className='btn btn-danger'>Logout</button>
                    <Greeting name={props.LoggedName} />
                </Link>   
            </div>
             :<div className='col-lg-4 login' >
                    <Link to='/login'>
                        <button 
                            data-toggle="modal" data-target="#exampleModal"
                            className='btn'>Login
                        </button> 
                    </Link>
                    <Link to="/register">
                        register
                    </Link>
            </div>
            }
        </nav>
    )
}
