import logo from '../assets/clean-energy.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home d-flex-column flex-center">
        <img className="p-2" src={logo} />
        <div className="p-2 text-center max-600">
          <h1>Welcome to <span className="text-green">Green Map!</span></h1>
          <p className="p-1">The Green Map will help you get a bird's eye view of the state of green energy in the United States. Use the visualizer to see the current state of solar (csp), wind, and geothermal energy nationwide.</p>
          <div className='p-1'>
            <Link className='btn' to="map">View the Map</Link>
          </div>
        </div>
    </div>
  );
}

export default Home;
