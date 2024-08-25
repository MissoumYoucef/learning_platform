import React from 'react';
import './statistics.css';
import barchart from './images/barchart.png';
import circle from './images/circle.png';


function Statistics() {
  return (
    <div className='statistics_part'>
        <div className='statistics_container'>
            <div className='statistics_container_text'>
                <p className='statistics_text'>STUDY STATISTICS</p>
                <div className='statistics_date'>
                    <p>week</p>
                    <p>month</p>
                </div>
            </div>
        <img src={barchart} alt="description"/>
        </div>
        <div className='statistics_container2'>
          <p className='statistics_text'>PROGRESS</p>
          <img src={circle} alt="description"/>
          <div className='statistics_progress'>
            <p>Courses</p>
            <p>Prototypes</p>
          </div>
        </div>
    </div>
  );
}


export default Statistics;
