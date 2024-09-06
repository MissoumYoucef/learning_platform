import './progress.css';
import '../sharedcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Example icon
function Status() {
  return (
    <div className="status_container">
        <FontAwesomeIcon icon={faGraduationCap}/>
        <p className="pgras">3/7 courses</p>
    </div>
  );
}

export default Status;
