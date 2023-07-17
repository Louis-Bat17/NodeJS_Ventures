// Initialize the map
const map = L.map('map').setView([-26.1327, 28.0559], 12); // Coordinates for Midrand

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Create the routing control
const control = L.Routing.control({
  waypoints: [
    L.latLng(-26.1076, 28.0567), // Coordinates for Sandton
    L.latLng(-25.7799, 28.2750) // Coordinates for Midrand
  ],
  routeWhileDragging: true
}).addTo(map);

// Calculate and display the distance between Midrand and Sandton
control.on('routesfound', function (e) {
  const routes = e.routes;
  const distance = routes[0].summary.totalDistance / 1000; // Distance in kilometers

  console.log('Distance:', distance, 'km');
});

