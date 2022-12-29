import React, {useState} from 'react';
import './CardPick.css';

const CardPick = props => {
    const [randomNumber, setRandomNumber] = useState();
    const [playingGame, setPlayingGame] = useState(false);
    const [cardArray, setCardArray] = useState([0, 0, 0]);
    const [winner, setWinner] = useState(false);
    let randomizer = Math.random() * 3;

    const homeClick = event => {
        setPlayingGame(true);
        setRandomNumber(Math.floor(randomizer));
        setCardArray(previousState => {
            let updatedCardArray = [...previousState];
            updatedCardArray = [0, 0, 0];
            updatedCardArray.splice(randomNumber, 1, 1);
            return updatedCardArray;
        });
    };

    const retryClick = event => {
        setRandomNumber(Math.floor(randomizer));
        setCardArray(previousState => {
            let updatedCardArray = [...previousState];
            updatedCardArray = [0, 0, 0];
            updatedCardArray.splice(randomNumber, 1, 1);
            return updatedCardArray;
        });
    };

    const cardClick = event => {
        const value = event.target.value;
        switch (value) {
            case '1':
                console.log('You won');
                setWinner(true);
                break;
            case '0':
                console.log('You lost');
                setWinner(false);
                break;
            default:
                console.log('Neither');
        }
    };

    const quitClick = event => {
        setPlayingGame(false);
    };

    const Card = props => {
        return (
            <div className="col-md-4">
                <button
                    className="card_game"
                    value={props.val}
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={cardClick}
                >
                    {/* <button className="card_game" value={props.val} onClick={cardClick}> */}
                    {props.val}
                </button>
            </div>
        );
    };

    const Game = props => {
        return (
            <React.Fragment>
                <div className="col-md-12">
                    <h5>Pick a card</h5>
                </div>
                {props.val.map(value => (
                    <Card key={Math.random() * 3} val={value} />
                ))}
                <Modal />
            </React.Fragment>
        );
    };

    const Home = props => {
        return (
            <React.Fragment>
                <div className="col-md-12">
                    <h1>Welcome to card game</h1>
                    <h5>Would you like to play?</h5>
                    <button className="btn btn-primary" onClick={homeClick}>
                        Play!
                    </button>
                </div>
            </React.Fragment>
        );
    };

    const Modal = props => {
        return (
            <React.Fragment>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    {winner == true ? 'You have won!' : 'You have Lost!'}
                                </h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    &times;
                                </button>
                            </div>

                            <div className="modal-body">Would you like to try again? Or quit?</div>

                            <div className="modal-footer">
                                {/* prettier-ignore */}
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={retryClick}>
                                    Try Again?
                                </button>
                                {/* prettier-ignore */}
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={quitClick}>
                                    Quit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {playingGame == false ? <Home /> : <Game val={cardArray} />}
                </div>
                {/* <div className="row"><Game /></div> */}
            </div>
        </React.Fragment>
    );
};

export default CardPick;

/*
User starts game - Home screen
figure out array randomization
picks card
    if card right - Win
    else - lose
Modal pop up saying you won or lost
*/
