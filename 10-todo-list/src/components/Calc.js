import React, {useState} from 'react';
import './Calc.css';

function Calc() {
    const [enteredValue, setEnteredValue] = useState('');
    const [equation, setEquation] = useState([]);

    const handleClick = event => {
        // setEnteredValue(event.target.value);
        const value = event.target.value;
    };

    const Button = props => {
        return (
            <button className={props.selector} value={props.val} onClick={handleClick}>{props.children}</button>
        );
    };

    return (
        <div className="calc-body">
            <div className="calc-screen">
                <div id="calc-operation">1234 + 567 + </div>
                <div id="calc-typed">890</div>
            </div>

            <div className="calc-button-row">
                <Button selector={"clear"} val={"clear"}>C</Button>
                <button className="opt">H</button>
                <Button selector={"opt"} val={"%"}>&#37;</Button>
                <Button selector={"opt"} val={"/"}>&#247;</Button>
                <Button val={"7"}>7</Button>
                <Button val={"8"}>8</Button>
                <Button val={"9"}>9</Button>
                <Button selector={"opt"} val={"*"}>&#215;</Button>
                <Button val={"4"}>4</Button>
                <Button val={"5"}>5</Button>
                <Button val={"6"}>6</Button>
                <Button selector={"opt"} val={"-"}>&#8722;</Button>
                <Button val={"1"}>1</Button>
                <Button val={"2"}>2</Button>
                <Button val={"3"}>3</Button>
                <Button selector={"opt"} val={"+"}>&#43;</Button>
                <Button val={"0"}>0</Button>
                <Button val={"."}>.</Button>
                <Button selector={"opt"} val={"del"}>&#9003;</Button>
                <Button selector={"opt"} val={"equal"}>&#61;</Button>
            </div>
        </div>
    );
}

export default Calc;
