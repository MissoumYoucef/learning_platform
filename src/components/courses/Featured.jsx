import './Featured.css';
import '../sharedcss.css';
import FeaturedCard from './featured_card';
function Featured() {
  return (
    <div className="Featured_container">
        <p className="h1_text">Featured</p>
        <FeaturedCard/>
    </div>
  );
}

export default Featured;
