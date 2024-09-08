import './courses.css';
import Progress from './progress';
import Allstatus from './allstatus';
import EnrolledCourses from './enrolled_courses';
import Featured from './Featured';

function Courses() {
  return (
    <div className="my_courses">
      <div className="my_courses_navbar">
        
      </div>
      <div className="my_courses_parts">
        <div className="my_courses_part1">
          <Progress/>
          <Allstatus/>
          <EnrolledCourses/>
        </div>
        <div className="my_courses_part2">
          <p className="my_courses_text">23 Sep</p>
          <Featured/>
        </div>
      </div>
    </div>
  );
}

export default Courses;
