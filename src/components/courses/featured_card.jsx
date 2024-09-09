import './featured_card.css';
import '../sharedcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import FeaturedImg from './images/featured.png';

function FeaturedCard() {
  return (
    <div className="featured_card">
      <div className="featured_header">
        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
        <span>5 lessons • 4 quizzes</span>
      </div>
      <h3 className="featured_title">Enim erat elit diam donec</h3>
      <p className="featured_description">
        Quisque et tristique eu est sed id sapien, nullam erat.
      </p>
      <div className="featured_footer">
        <div>
          <FontAwesomeIcon icon={faGraduationCap}/>
          <span>Shams Tabrez</span>
        </div>
        <img src={FeaturedImg} alt="Instructor" className="instructor_img" />
      </div>
    </div>
  );
}

export default FeaturedCard;
