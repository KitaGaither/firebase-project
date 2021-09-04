import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper purple darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Front-End Bootcamp</Link>
                <ul className="right">
            <li>
                <NavLink to='/bootcampList'>Bootcamp List</NavLink>
            </li>

            <li>
                <NavLink to='/bootcampDetails'>Bootcamp Details</NavLink>
            </li>

            <li>
                <NavLink to='/' className='btn btn-floating blue lighten-1'>LG</NavLink>
            </li>
        </ul>
            </div>
        </nav>
    )
}

export default Navbar;