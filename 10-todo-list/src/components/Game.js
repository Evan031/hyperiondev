import React from 'react';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import './Game.css';
import CurrencyConverter from '../components/CurrencyConverter';
import CardPick from '../components/CardPick';


const Game = props => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link className="navbar-brand" to="/">
                        Currency Converter
                    </Link>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/card-pick">
                                Card Game
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact={true} path="/" element={<CurrencyConverter />} />
                    <Route path="/card-pick" element={<CardPick />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default Game;
