import './App.css';
// import Dashboard from './components/dashboard';
// import Overview from './components/overview/overview';
import Courses from './components/courses/courses';
import SideBar from './components/sidebar';
function App() {
  return (
    <div className="App">
      <SideBar/>
      <div className='beside_SBar'>
       <Courses/>
      </div>      
    </div>
  );
}

export default App;
