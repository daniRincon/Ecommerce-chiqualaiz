// import React from 'react';
// import SearchBar from './SearchBar';
// import Greeting from './Greeting';
// import '../css-modules/navBar.module.css'


// export default (props) =>{
//     return (
//         <nav className='navbar navbar-expand-sm'>
//             <div className='col-lg-1'>

//             </div>
//             <SearchBar />
//             {props.loggedName
//             ?<div className='col-lg-4 login'>
//                 <Greeting name={props.loggedName} />   
//              </div>
//              :
//              <div className='col-lg-4 login'>
//                     <button 
//                     data-toggle="modal" data-target="#exampleModal"
//                     className='btn btn-info'>Login</button> 
//             </div>
//             } 
//         </nav>
//     )
// }


import React from 'react';
import SearchBar from './SearchBar';
import Greeting from './Greeting';
import { Link } from 'react-router-dom'
import '../css-modules/navBar.module.css'
import logo from '../../../back/public/images/logo_transparent.png'


export default (props) =>{
    return (
        <nav className='navbar navbar-expand-lg'>
            <Link>
            <div className="navbar-brand" style={{
                backgroundColor:"yellow",
                display:"inline-block",
                objectFit: "contain"
                }}>  {/*1*/}
            <img src={logo} alt="logo" style={{
            
            }}/>
            </div>
            </Link>
            <SearchBar />  {/*7*/}
            {props.loggedName
            ?<div className='col-lg-4 login'  style={{
                backgroundColor:"red"
                }}>  
                <Greeting name={props.loggedName} />   {/*4*/}
             </div>
             :
             <div className='col-lg-4 login' style={{
                backgroundColor:"blue"
                }}>   {/*4*/}
                    <button 
                    data-toggle="modal" data-target="#exampleModal"
                    className='btn btn-info'>Login</button> 
            </div>
            } 
        </nav>
    )
}
