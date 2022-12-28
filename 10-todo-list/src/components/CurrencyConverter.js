import React, {useState} from 'react';
import {evaluate} from 'mathjs';

const CurrencyConverter = props => {
    const conversionRates = {zar: '17.21', gbp: '0.831', eur: '0.94'};
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    const currencyInputChangeHandler = event => {
        setIsValid(false);
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            alert('You have not entered anything');
            return;
        }
        setIsValid(true);
    };

    console.log(evaluate(`(${conversionRates.zar} / 1) * 2`));

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Currency Converter</h1>
                        <form onSubmit={formSubmitHandler} className="mb-5">
                            <label htmlFor="name">Type in US dollar amount:</label>
                            {/* prettier-ignore */}
                            <input type="number" className="form-control mb-2" id="name" name="name" onChange={currencyInputChangeHandler}  />

                            {/* prettier-ignore */}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <div className="col-md-12">
                            <h4>Answers</h4>
                            <p>ZAR: R{isValid ? evaluate(`(${conversionRates.zar} / 1) * ${enteredValue}`).toFixed(2) : ''}</p>
                            <p>GBP: £{isValid ? evaluate(`(${conversionRates.gbp} / 1) * ${enteredValue}`).toFixed(2) : ''}</p>
                            <p>EUR: €{isValid ? evaluate(`(${conversionRates.eur} / 1) * ${enteredValue}`).toFixed(2) : ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CurrencyConverter;

/*
evaluate(stringEquation)

(toRate / 1) * searchValue
*/
