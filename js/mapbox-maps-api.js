// Initialize the map
mapboxgl.accessToken = mapToken2; // from key.js file
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
	center: [-98.4916, 29.4252],
	zoom: 9
});