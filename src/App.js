import React, { useState } from 'react';
import CoursesList from './CoursesList';
import SuperHero from './SuperHero';
import LikeArea from './LikeArea';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

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
const superheros = [
    {
        id: 1,
        name: 'Hulk',
        realname: 'Bruce Banner',
    },
    {
        id: 2,
        name: 'Iron Man',
        realname: 'Tony Stark',
    },
    {
        id: 3,
        name: 'Spiderman',
        realname: 'Peter Parker',
    },
    {
        id: 4,
        name: 'Batman',
        realname: 'Bruce Wayne',
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

    const [theTime, setTheTime] = useState(new Date().toLocaleString());
    setTimeout(() => {
        setTheTime(new Date().toLocaleString());
    }, 1000);

    // const filteredCoursesByLanguage = courses.filter((course) => {
    //     return course.language.includes(searchText);
    // });

    return (
        <div className='App'>
            <Typography variant='h4' component='h1'>
                Liste des Cours"
            </Typography>
            {/* //InputText */}
            <Box m={5}>
                <TextField
                    label='Rechercher'
                    InputProps={{
                        startAdornment: (
                            <SearchIcon position='start'></SearchIcon>
                        ),
                    }}
                    variant='outlined'
                    size='small'
                    className='search-input'
                    inputProps={{ 'aria-label': 'description' }}
                    id='searchInput'
                    type='text'
                    onChange={handleSearchInputChange}
                />
            </Box>
            {/* //CoursesList */}
            <Grid container direction='row' alignItems='stretch'>
                <CoursesList courses={filteredCourses} />
            </Grid>
            {/* //SuperHero List */}
            <ul className='superhero-list'>
                <Typography>
                    {superheros.map((superhero) => {
                        return (
                            <SuperHero
                                key={superhero.id}
                                name={superhero.name}
                                realname={superhero.realname}
                            />
                        );
                    })}
                </Typography>
            </ul>

            <p>Il est actuellement {theTime}</p>

            <LikeArea />
        </div>
    );
};

export default App;
