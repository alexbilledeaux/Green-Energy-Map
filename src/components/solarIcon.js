import L from 'leaflet';

// Custom solar panel icon for use in Leaflet

const solarIcon = new L.Icon({
    iconUrl: require('../assets/solar-marker.png'),
    iconRetinaUrl: require('../assets/solar-marker.png'),
    iconAnchor: [15,30],
    popupAnchor: [0,-30],
    iconSize: new L.Point(30,30),
    className: 'geo-icon'
});

export { solarIcon };