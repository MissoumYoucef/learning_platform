import './sidebar.css';
import SidBarImg from './images/olp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';


function SideBar() {
  return (
    <div className='sideBar'>
        <img src={SidBarImg} alt="Side_Bar" />
        <div className='sideBar_icons_parts'>
          <div>
            <div>
              <FontAwesomeIcon icon={faGraduationCap} color='white'/>
            </div>
            <div>
              <FontAwesomeIcon icon={faGraduationCap} color='white'/>
              <FontAwesomeIcon icon={faGraduationCap} color='white'/>
              <FontAwesomeIcon icon={faGraduationCap} color='white'/>
              <FontAwesomeIcon icon={faGraduationCap} color='white'/>
            </div>
          </div>
          <FontAwesomeIcon icon={faGraduationCap} color='white'/>
        </div>
    </div>
  );
}

export default SideBar;
