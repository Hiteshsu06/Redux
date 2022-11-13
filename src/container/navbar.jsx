import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import './navbar.css';

const navbar = () => {
    
  return (
   <div className='navbarcss'>
    <nav className='navbar navbar-expand-lg bg-light'>
        <ul className='navbar-nav'>
            <li className="nav-item" >
                <Link className="nav-link" to="/">INPUT FORM</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Practice3">TABLE</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
   </div>
  )
}

export default navbar