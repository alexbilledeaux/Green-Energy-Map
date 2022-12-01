import L from 'leaflet';

// Custom wind turbine icon for use in Leaflet

const windIcon = new L.Icon({
    iconUrl: require('../assets/turbine-marker.png'),
    iconRetinaUrl: require('../assets/turbine-marker.png'),
    iconAnchor: [15,30],
    popupAnchor: [0,-30],
    iconSize: new L.Point(30,30),
    className: 'geo-icon'
});

export { windIcon };