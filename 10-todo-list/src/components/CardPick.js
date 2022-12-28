import React, {useState} from 'react';
import './CardPick.css';

const CardPick = props => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Card Pick</h1>
                        <h5>Pick a card</h5>
                    </div>
                    <div className="col-md-4">
                        <button className="card_game">0</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CardPick;
