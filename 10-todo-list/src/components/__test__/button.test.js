import React from 'react';
import {ReactDOM} from 'react';
import Button from '../Button';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Test from '../Test';

describe('Button', () => {
    it('renders without crashing', () => {
        const {container} = render(<Button></Button>);
        expect(container).toMatchSnapshot();
    });

    it('renders button correctly', () => {
        const {getByTestId} = render(<Button label="click me please"></Button>);
        expect(getByTestId('button')).toHaveTextContent('click me please');
    });
});

// Test('properly adds two numbers', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
