import React, {useState} from 'react';
import './Button.css';

function Button({label}) {

    return (
        <div data-testid='button' className='btn btn-primary'>{label}</div>
    );
}

export default Button;
