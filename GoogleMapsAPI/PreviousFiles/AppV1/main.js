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
    L.latLng(-33.9189, 18.4233) // Coordinates for Midrand
  ],
  routeWhileDragging: true
}).addTo(map);

// Calculate and display the distance between Midrand and Sandton
control.on('routesfound', function (e) {
  const routes = e.routes;
  const distance = [0].summary.totalDistance / 1000; // Distance in kilometers
  document.getElementById('distance').textContent = 'Distance: ' + distance + ' km';
});

// function calculateDistance() {
//   const latitude1 = parseFloat(document.getElementById('latitude1').value);
//   const longitude1 = parseFloat(document.getElementById('longitude1').value);

//   const latitude2 = parseFloat(document.getElementById('latitude2').value);
//   const longitude2 = parseFloat(document.getElementById('longitude2').value);


//   if (isNaN(latitude1) || isNaN(longitude1) || isNaN(latitude2) || isNaN(longitude2)) {
//     alert('Please enter valid latitude and longitude values.');
//     return;
//   }

//   const startPoint = L.latLng(latitude, longitude);
//   const endPoint = L.latLng(latitude2, longitude2); 

//   const newdistance = startPoint.distanceTo(endPoint) / 1000;

//   document.getElementById('newdistance').textContent = 'Distance: ' + newdistance + ' km';
// }