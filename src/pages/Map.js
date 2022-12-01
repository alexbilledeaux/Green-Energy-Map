import { MapContainer, TileLayer } from 'react-leaflet';
import Layer from '../components/layer';
import * as L from "leaflet";
import '../App.css';
import React from 'react';
import GeoData from '../assets/geothermal.json';
import SolarData from '../assets/csp.json';
import WindData from '../assets/windturbines_compressed.json';

// Coordinates that dictate the bounds of the leaflet map
var usaBounds = L.latLngBounds(
    L.latLng(1.499550, -176.276413),
    L.latLng(72.819973333875346, -39.75114547534469),
);

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {solarActive: false, windActive: false, geoActive: false, csp:[], geo:[], wind: []};
    }

    // Handlers for updating the state of the map layers
    windHandler = () => {
        this.setState({
            windActive: !this.state.windActive
        })
    }

    solarHandler = () => {
        this.setState({
            solarActive: !this.state.solarActive
        })
    }

    geoHandler = () => {
        this.setState({
            geoActive: !this.state.geoActive
        })
    }

    // When the component loads, grab all the data
    componentDidMount(){
        this.setState({
            wind: WindData,
            geo: GeoData,
            csp: SolarData
        })
    }

    render() {
        return (
            <div className="Map">
                <MapContainer className="green-map" center={usaBounds.getCenter()} zoom={3} minZoom={3} maxBounds={usaBounds}>
                    {/* Leaflet library for React. Render a map of North America with scrolling bounds */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* Conditionally render the map layers, depending on current state */}
                    {this.state.solarActive  && <Layer markers={this.state.csp} />}
                    {this.state.geoActive  && <Layer markers={this.state.geo} />}
                    {this.state.windActive  && <Layer markers={this.state.wind} />}
                    {/* UI Controls for toggling on/off layers of the map */}
                    <div className="layer-control">
                        <form>
                            <p>Active Layers</p>
                            <label>
                                Wind
                                <input type="checkbox" checked={this.state.windActive} onChange={this.windHandler} />
                            </label>
                            <label>
                                Solar
                                <input type="checkbox" checked={this.state.solarActive} onChange={this.solarHandler} />
                            </label>
                            <label>
                                Geothermal
                                <input type="checkbox" checked={this.state.geoActive} onChange={this.geoHandler} />
                            </label>
                        </form>
                    </div>
                </MapContainer>
            </div>
          );
    }
}

export default Map;
