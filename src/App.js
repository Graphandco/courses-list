import React, { useState } from 'react';
import CoursesList from './CoursesList';
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

const App = () => {
    const [searchText, setSearchText] = useState('');
    //const [$variable, $function] = empty state('');

    const handleSearchInputChange = (event) => {
        //console.log(event.target.value);
        setSearchText(event.target.value);
    };

    const filteredCourses = courses.filter((course) => {
        return (
            course.title.includes(searchText) ||
            course.author.includes(searchText)
        );
    });

    return (
        <div className='App'>
            <h1>Liste des cours</h1>
            <label htmlFor='searchInput'>Rechercher: </label>
            <input
                id='searchInput'
                type='text'
                onChange={handleSearchInputChange}
            />

            <CoursesList courses={filteredCourses} />
        </div>
    );
};

export default App;
