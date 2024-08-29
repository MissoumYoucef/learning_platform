import './overview.css';
import Card from './card';
import Statistics from './statistics';
import MyCourses  from './mycourses';
import LiveEvents from './live_events';
function Overview() {
  return (
    <div className="overview">
      <div className="overview_part1">
        <p className="overview_text">OVERVIEW</p>
        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      <Statistics />
      <MyCourses />
      </div>
      <div className="overview_part2">
        <p className="overview_text">LIVE EVENTS</p>
        <LiveEvents />
      </div>
    </div>
  );
}

export default Overview;
