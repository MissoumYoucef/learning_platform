import './course_progress_card.css';
import '../sharedcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Example icon
function EnrolledCourseCard() {
  return (
      <div className="enrolled_course_card">
        <div className="enrolled_course_card_beg">
          <div className="enrolled_course_card_icon">
            <FontAwesomeIcon icon={faGraduationCap}/>
          </div>
          <div className="enrolled_course_card_text">
              <p className="pgars_text">Basic of English Language</p>
              <p className="pnormal_text">Progress</p>
          </div>
        </div> 
        <FontAwesomeIcon icon={faGraduationCap}/>
      </div>    
  );
}

export default EnrolledCourseCard;
