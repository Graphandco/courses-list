import React from 'react';

const CoursesList = ({ courses }) => {
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

export default CoursesList;
