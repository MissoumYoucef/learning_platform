import React from 'react';
import './mycourses.css';
import Course from './course';

function MyCourses() {
  return (
    <div className='my_courses_part'>
        <p className='my_courses_text'>MY COURSES</p>
        <div className='my_courses_container'>
            <Course />
        </div>
    </div>
  );
}


export default MyCourses;
