import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const CoursesList = ({ courses }) => {
    return courses.map((course) => {
        return (
            <Grid
                style={{ padding: 'calc(.2rem + .8vw)' }}
                item
                xs={12}
                sm={6}
                lg={4}
                xl={3}
                className='course-list'
                key={course.id}
            >
                <Card className='card-course'>
                    {course.title}
                    <span>
                        <a href='{course.url}'>{course.url}</a>
                    </span>
                    <span>Par {course.author}</span>
                    <span>Note: {course.rating}</span>
                    <span>Nombre de lectures: {course.number_of_lectures}</span>
                </Card>
            </Grid>
        );
    });
};

export default CoursesList;
