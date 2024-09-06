import './featured_card.css';
import '../sharedcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import FeaturedImg from './images/featured.png';

function FeaturedCard() {
  return (
      <div className="featured_card">
        <div className="featured_card_beg">
          <FontAwesomeIcon icon={faGraduationCap}/>
          <p>5 Lessons</p>
          <p>5 Quizez</p>
        </div>
        <p>Enim erat elit diam donec</p>
        <p>Quisque et tristique eu est sed id sapien, nullam erat.</p>
        <div className="featured_card_end">
          <FontAwesomeIcon icon={faGraduationCap}/>
          <p className="pnormal_text">Shams Tabrez</p>
          <img src={FeaturedImg} alt="featuredImg"/>
        </div>
      </div>    
  );
}

export default FeaturedCard;
