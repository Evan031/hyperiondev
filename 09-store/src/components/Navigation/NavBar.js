import React from 'react';
import './NavBar.css';
import logo from './logo.jpg';

const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" className="nav_logo" />
            </a>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Link 1
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Link 2
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Link 3
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
