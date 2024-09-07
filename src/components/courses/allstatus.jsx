import './allstatus.css';
import Status from './status';
import '../sharedcss.css'
function Allstatus() {
  return (
    <div>
      <p className='h3_text'>All Status</p>
      <div className="allstatus_container">
        <div className="status"><Status /></div>
        <div className="status"><Status /></div>
        <div className="status"><Status /></div>
        <div className="status"><Status /></div>
      </div>
    </div>


    
  );
}

export default Allstatus;
