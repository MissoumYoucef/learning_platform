import React from 'react';
import './course.css';
import circ from './images/circ.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Example icon


function Course() {
  return (
    <div className='course_card'>
        <div className='course_card_f'>
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faCoffee} />
        </div>
        <p className='course_name'>Introduction to Python</p>
        <p className='course_user'>Missoum youcef</p>
        <div className='course_circle'>  
            <img src={circ} alt="description"/>
        </div>
    </div>
  );
}


export default Course;
