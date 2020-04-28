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
    return (
        <div className='App'>
            <h1>Liste des cours</h1>
            <CoursesList />
        </div>
    );
}

const CoursesList = () => {
    return courses.map((course) => {
        return (
            <div className='course-list' key={course.id}>
                {course.title}
                <span>
                    <a href='{course.url}'>{course.url}</a>
                </span>
                <span>Par {course.author}</span>
                <span>Note: {course.rating}</span>
                <span>Nombre de lectures: {course.number_of_lectures}</span>
            </div>
        );
    });
};

export default App;
