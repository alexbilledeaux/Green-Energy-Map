import Home from './pages/Home';
import Map from './pages/Map';
import References from './pages/References';
import './App.css';
import { HashRouter, Routes , Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Provide single page application routing using React Router */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/references" element={<References />} />
        </Routes>
        {/* Include footer navigation no matter the view */}
        <footer className="Footer p-2 bg-green text-right">
          <Link className="text-white p-1" to="/">Home</Link>
          <Link className="text-white p-1" to="map">Map</Link>
          <Link className="text-white p-1" to="references">References</Link>
        </footer>
      </HashRouter>
    </div>
  );
}

export default App;
