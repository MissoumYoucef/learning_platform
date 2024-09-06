import './enrolled_courses.css';
import '../sharedcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import EnrolledCourseCard from './course_progress_card';
function EnrolledCourses() {

  return (
    <div>
      <div className="enrolled_course_bar">
        <p className="h3_text">Enrolled Courses</p>
        <div className='Course_Catalog_btn'>
          <FontAwesomeIcon icon={faGraduationCap}/>
          <p>Course Catalog</p>
        </div>
      </div>
      <div className="enrolled_course_courses">
         <EnrolledCourseCard/>
         <EnrolledCourseCard/>
         <EnrolledCourseCard/>
      </div>
    </div>
    
  );
}

export default EnrolledCourses;
