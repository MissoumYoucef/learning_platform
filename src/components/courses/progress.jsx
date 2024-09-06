import './progress.css';
import progressImg from './images/p.png';

function Progress() {
  return (
    <div className="progress_container">
        <p className="progress_text">Progress</p>
        <img src={progressImg} alt="progress" />
    </div>
  );
}

export default Progress;
