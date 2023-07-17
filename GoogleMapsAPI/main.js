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
    L.latLng(-33.9189, 18.4233) // Coordinates for Cape Town
  ],
  routeWhileDragging: true
}).addTo(map);

control.on('routesfound', function (e) {
    const routes = e.routes;
    const distance = routes[0].summary.totalDistance / 1000; 
  
    // Update HTML element with distance value
    document.getElementById('distance').textContent = 'Distance: ' + distance.toFixed(2) + ' km';
});


function calculateDistance() {
  const latitude1 = parseFloat(document.getElementById('latitude1').value);
  const longitude1 = parseFloat(document.getElementById('longitude1').value);

  const latitude2 = parseFloat(document.getElementById('latitude2').value);
  const longitude2 = parseFloat(document.getElementById('longitude2').value);

  if (isNaN(latitude1) || isNaN(longitude1) || isNaN(latitude2) || isNaN(longitude2)) {
    alert('Please enter valid latitude and longitude values.');
    return;
  }

  const startPoint = L.latLng(latitude1, longitude1);
  const endPoint = L.latLng(latitude2, longitude2); 

  const newdistance = startPoint.distanceTo(endPoint) / 1000;

  // update distance field
  document.getElementById('newdistance').textContent = 'Distance: ' + newdistance.toFixed(2) + ' km';

  // remove waypoint if exists
  if (control) {
    control.remove();
  }

  // re-add waypoints
  control = L.Routing.control({
    waypoints: [
      L.latLng(latitude1, longitude1), 
      L.latLng(latitude2, longitude2)
    ],
    routeWhileDragging: true
  }).addTo(map);

  // reset map view
  L.map('map').setView([latitude1, longitude1], 40);
}

document.getElementById("calculatebtn").addEventListener("click", calculateDistance);