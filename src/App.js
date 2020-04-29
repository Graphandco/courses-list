import React, { useState } from 'react';
import CoursesList from './CoursesList';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const courses = [
    {
        id: 1,
        title: 'Apprendre le Javascript',
        author: 'Ted Mosby',
        hours_video: 9.5,
        number_of_lectures: 350,
        rating: 3.5,
        url: 'https://mysupercourse/',
        language: ['javascript'],
    },
    {
        id: 2,
        title: 'Apprendre le langage HTML',
        author: 'Barney Stinson',
        hours_video: 16.5,
        number_of_lectures: 50,
        rating: 4.6,
        url: 'https://mysupercourse/',
        language: ['html'],
    },
    {
        id: 3,
        title: 'Le Code pour les Nuls',
        author: 'Reggio',
        hours_video: 16.5,
        number_of_lectures: 1260,
        rating: 4.9,
        url: 'https://mysupercourse/',
        language: ['javascript', 'html', 'php'],
    },
    {
        id: 4,
        title: 'Apprendre le PHP',
        author: 'Tony Stark',
        hours_video: 8.5,
        number_of_lectures: 260,
        rating: 3.8,
        url: 'https://mysupercourse/',
        language: ['css', 'php'],
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
            course.title.toLowerCase().includes(searchText.toLowerCase()) ||
            course.author.toLowerCase().includes(searchText.toLowerCase())
        );
    });

    // const filteredCoursesByLanguage = courses.filter((course) => {
    //     return course.language.includes(searchText);
    // });

    return (
        <div className='App'>
            <Typography>
                <h1>Liste des cours</h1>

                {/*<label htmlFor='searchInput'>Rechercher: </label>
             <input
                id='searchInput'
                type='text'
                onChange={handleSearchInputChange}
            /> */}
                <Box mb={2}>
                    <TextField
                        label='Rechercher'
                        variant='outlined'
                        size='small'
                        className='search-input'
                        inputProps={{ 'aria-label': 'description' }}
                        id='searchInput'
                        type='text'
                        onChange={handleSearchInputChange}
                    />
                </Box>
                <Grid container direction='row' alignItems='stretch'>
                    <CoursesList courses={filteredCourses} />
                </Grid>
            </Typography>
        </div>
    );
};

export default App;
