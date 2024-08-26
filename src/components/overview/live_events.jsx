import React from 'react';
import './live_events.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Example icon
import liveev from "./images/liveev.png"

function LiveEvents() {
  return (
    <div className='live_events_part'>
        <div className='live_events_container'>
            <img src={liveev} alt="data" />
            <div>
                <p className='live_events_text'>Ipsum odio et 
                    integer aliquet lorem a,
                     sem suscipit varius.</p>
                <div>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <p>Missoum youcef</p>
                </div>
            </div>
            <FontAwesomeIcon icon={faGraduationCap} />
        </div>
    </div>
  );
}


export default LiveEvents;
