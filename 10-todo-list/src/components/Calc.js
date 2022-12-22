import React, {useState} from 'react';
import {evaluate } from 'mathjs'
import './Calc.css';

    

function Calc() {
    const [number, setNumber] = useState('');
    const [equation, setEquation] = useState([]);

    const handleClick = event => {
        // setEnteredValue(event.target.value);
        const value = event.target.value;
        switch (value) {
            case 'clear':
                setNumber('');
                setEquation([]);
                break;
            case '%':
                console.log('percent');
                break;
            case '/':
                console.log('divide');
                break;
            case '*':
                console.log('multiply');
                break;
            case '-':
                console.log('minus');
                break;
            case '+':
                console.log('plus');
                setEquation(prev => {
                    const updatedEquation = [...prev];
                    updatedEquation.push(number);
                    updatedEquation.push(value);
                    return updatedEquation;
                });
                setNumber('');
                break;
            case '.':
                console.log('point');
                break;
            case 'del':
                console.log('del');
                break;
            case 'equal':
                setEquation(prev => {
                    const updatedEquation = [...prev];
                    updatedEquation.push(number);
                    updatedEquation.join('');
                    // const finishedEquation = evaluate(updatedEquation);
                    console.log(updatedEquation);
                    return updatedEquation;
                });
                // console.log(equation);
                setNumber(''); 
                break;
            default:
                // setNumber(value);
                setNumber(prev => {
                    const updatedNumber = prev;
                    const result = updatedNumber.concat(value);
                    return result;
                });
                break;
        }
    };

    const Button = props => {
        return (
            <button className={props.selector} value={props.val} onClick={handleClick}>
                {props.children}
            </button>
        );
    };

    return (
        <div className="calc-body">
            <div className="calc-screen">
                <div id="calc-operation">1234 + 567 + </div>
                <div id="calc-typed">890</div>
            </div>

            <div className="calc-button-row">
                <Button selector={'clear'} val={'clear'}>
                    C
                </Button>
                <button className="opt">H</button>
                <Button selector={'opt'} val={'%'}>
                    &#37;
                </Button>
                <Button selector={'opt'} val={'/'}>
                    &#247;
                </Button>
                <Button val={'7'}>7</Button>
                <Button val={'8'}>8</Button>
                <Button val={'9'}>9</Button>
                <Button selector={'opt'} val={'*'}>
                    &#215;
                </Button>
                <Button val={'4'}>4</Button>
                <Button val={'5'}>5</Button>
                <Button val={'6'}>6</Button>
                <Button selector={'opt'} val={'-'}>
                    &#8722;
                </Button>
                <Button val={'1'}>1</Button>
                <Button val={'2'}>2</Button>
                <Button val={'3'}>3</Button>
                <Button selector={'opt'} val={'+'}>
                    &#43;
                </Button>
                <Button val={'0'}>0</Button>
                <Button val={'.'}>.</Button>
                <Button selector={'opt'} val={'del'}>
                    &#9003;
                </Button>
                <Button selector={'opt'} val={'equal'}>
                    &#61;
                </Button>
            </div>
        </div>
    );
}

export default Calc;
