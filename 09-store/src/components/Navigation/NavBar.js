import React from 'react';
import './NavBar.css';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" className="nav_logo" />
            </Link>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
