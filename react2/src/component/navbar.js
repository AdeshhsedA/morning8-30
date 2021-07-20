import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="navbar-nav nav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;