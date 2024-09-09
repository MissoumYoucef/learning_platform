import './navbar.css';
import './sharedcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
    <div className="nav_bar">
      <h1 className="h1_text">My Courses</h1>
      <div className="nav_bar_icons">
        <div>
            
        </div>
        <FontAwesomeIcon icon={faGraduationCap}/>
        <FontAwesomeIcon icon={faGraduationCap}/>
      </div>
    </div>
  );
}

export default NavBar;
