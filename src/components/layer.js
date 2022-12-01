import React from 'react';
import { geoIcon } from './geoIcon';
import { solarIcon } from './solarIcon';
import { windIcon } from './windIcon';
import { Marker, Popup } from 'react-leaflet';

// A class used for rendering collections of leaflet markers.

class Layer extends React.Component {
    constructor(props) {
        super(props);
    }

    // Translate the 'type' prop into a custom marker graphic
    getIcon(type) {
        switch(type) {
            case 'Solar':
                return solarIcon;
            case 'geothermal':
                return geoIcon;
            case 'wind':
                return windIcon;
            default:
                return solarIcon;
        }
    }

    // Take each marker passed in to the layer's props and render it as a Leaflet marker
    renderMarkers() {
        const markers = this.props.markers.map((marker, index)=>
        <Marker key={marker.name + index} position={[marker.x, marker.y]} icon={ this.getIcon(marker.type) }>
            <Popup>
                <p className='facility-name'>{marker.name}</p>
                <p>Capacity: {marker.capacity_mw} MW</p>
                <p>Technology: {marker.technology}</p>
                <p>Year Operational: {marker.year_operational}</p>
            </Popup>
        </Marker>
        );
        console.log(markers);
        return markers;
    }

    render() {
        return (
            <div className="layer">
                { this.renderMarkers() }
            </div>
        );
    }
}

export default Layer;