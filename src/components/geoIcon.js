import L from 'leaflet';

// Custom geothermal facility icon for use in Leaflet

const geoIcon = new L.Icon({
    iconUrl: require('../assets/thermal-marker.png'),
    iconRetinaUrl: require('../assets/thermal-marker.png'),
    iconAnchor: [15,30],
    popupAnchor: [0,-30],
    iconSize: new L.Point(30, 30),
    className: 'geo-icon'
});

export { geoIcon };