import React, {useState} from 'react';
import './Test.css';
import { evaluate } from 'mathjs'



function Test() {

    // let foo = '2+3';

    let foo = ['12', '+', '45'];
    let equation = foo.join('');

    return (
        // <form onSubmit={formSubmitHandler} className="mb-5">
        //     <label htmlFor="name">Calculator:</label>
        //     {/* prettier-ignore */}
        //     <input type="text" className="form-control mb-2" id="calc" name="calc" onChange={InputChangeHandler}  />

        //     {/* prettier-ignore */}
        //     <button type="submit" className="btn btn-primary">Submit</button>
        // </form>
        <p>{evaluate('1500*30%')}</p>
    );
}

export default Test;
