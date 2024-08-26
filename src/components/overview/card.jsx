import React from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Example icon

function Card() {
  return (
    <div className='card_container'>
      <div className='card_title'>
        <FontAwesomeIcon icon={faGraduationCap} />
        <p> Course in progress</p>
      </div>
      <p className='card_number'>3</p>
    </div>
  );
}
export default Card;
