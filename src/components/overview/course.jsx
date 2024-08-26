import React from 'react';
import './course.css';
import circ from './images/circ.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons'; // Example icon
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Example icon
// import { faUser } from '@fortawesome/free-solid-svg-icons'; // Example icon


function Course() {
  return (
    <div className='course_card'>
        <div className='course_card_f'>
          <FontAwesomeIcon icon={faGraduationCap} />
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
        <p className='course_name'>Introduction to Python</p>
        <div className='course_user'>
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>Missoum youcef</p>
        </div>
        <div className='course_circle'>  
            <img src={circ} alt="description"/>
        </div>
    </div>
  );
}


export default Course;
