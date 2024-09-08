import './featured_card.css';
import '../sharedcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import FeaturedImg from './images/featured.png';

function FeaturedCard() {
  return (
    <div className="featured_card">
      <div className="featured_card_beg">
        <FontAwesomeIcon icon={faGraduationCap} />
        <div className='info'>
          <p>5 Lessons</p>
          <p>4 Quizzes</p>
        </div>
      </div>
      <p>Enim erat elit diam donec</p>
      <p>Quisque et tristique eu est sed id sapien, nullam erat.</p>
      <div className="featured_card_end">
        <div>
          <FontAwesomeIcon icon={faGraduationCap} />
          <p className="pnormal_text">Shams Tabrez</p>
        </div>
        <img src={FeaturedImg} alt="featured" />
      </div>
    </div>
  );
}

export default FeaturedCard;
