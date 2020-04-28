import React from 'react';
import './App.css';

const courses = [
    {
        id: 1,
        title: 'Apprendre le Javascript',
        author: 'Ted Mosby',
        hours_video: 9.5,
        number_of_lectures: 350,
        rating: 3.5,
        url: 'https://mysupercourse/',
    },
    {
        id: 2,
        title: 'Apprendre le langage HTML',
        author: 'Barney Stinson',
        hours_video: 16.5,
        number_of_lectures: 50,
        rating: 4.6,
        url: 'https://mysupercourse/',
    },
    {
        id: 3,
        title: 'Le Code pour les Nuls',
        author: 'Reggio',
        hours_video: 16.5,
        number_of_lectures: 1260,
        rating: 4.9,
        url: 'https://mysupercourse/',
    },
    {
        id: 4,
        title: 'The Magic Book',
        author: 'Laurianne',
        hours_video: 8.5,
        number_of_lectures: 260,
        rating: 3.8,
        url: 'https://mysupercourse/',
    },
];

function App() {
    const saluer = {
        saluer_one: 'Hello',
        saluer_two: 'World',
    };
    function saluer_react() {
        return 'Hello from React';
    }
    return (
        <div className='App'>
            <h1>
                {saluer.saluer_one} {saluer.saluer_two}
            </h1>
            <span>{saluer_react()}</span>
        </div>
    );
}

export default App;
