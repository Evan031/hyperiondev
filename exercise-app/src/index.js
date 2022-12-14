import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Task8 from './Task8';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const userInfo = [
    {
        name: 'Evan',
        surname: 'Taylor',
        date_of_birth: '02/06/1992',
        country: 'South Africa',
        email: 'e.taylor187031@gmail.com',
        telephone: '083-377-7473',
        company: 'Semantica',
        profile_picture: 'https://www.semantica.co.za/wp-content/uploads/2021/06/Evan-1.png',
        interests: ['coding', 'fighting', 'drinking', 'hip-hop'],
    },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Task8 info={userInfo} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
