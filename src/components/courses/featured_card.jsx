import './course_progress_card.css';
import '../sharedcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function FeaturedCard() {
  return (
      <div className="featured_card">
        <div className="featured_card_beg">
          <FontAwesomeIcon icon={faGraduationCap}/>
          <p>5 Lessons</p>
          <p>5 Quizez</p>
        </div>
        <p>5 Lessons</p>
        <p>5 Quizez</p>
        <div className="featured_card_end">
          <FontAwesomeIcon icon={faGraduationCap}/>
          <p className="pgars_text">Basic of English Language</p>
          <p className="pnormal_text">Progress</p>
        </div>
      </div>    
  );
}

export default FeaturedCard;
