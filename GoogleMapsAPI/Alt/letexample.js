let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  // Coordinates for Sandton (example: -26.1076 latitude, 28.0567 longitude)
  const sandtonLatLng = { lat: -26.1076, lng: 28.0567 };

  // Coordinates for Menlyn (example: -25.7799 latitude, 28.2750 longitude)
  const menlynLatLng = { lat: -25.7799, lng: 28.2750 };

  map = new Map(document.getElementById("map"), {
    center: sandtonLatLng, // Set the center to Sandton
    zoom: 8,
  });

  // You can also set a marker for each location if desired
  new google.maps.Marker({
    position: sandtonLatLng,
    map: map,
    title: "Sandton",
  });

  new google.maps.Marker({
    position: menlynLatLng,
    map: map,
    title: "Menlyn",
  });
}

initMap();
