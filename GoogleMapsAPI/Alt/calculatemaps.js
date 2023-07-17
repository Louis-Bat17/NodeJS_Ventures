const googleMapsClient = require('@google/maps').createClient({
  key: 'YOUR_GOOGLE_MAPS_API_KEY',
});

const origin = 'San Francisco, CA';
const destination = 'Los Angeles, CA';

googleMapsClient.distanceMatrix({
  origins: [origin],
  destinations: [destination],
}, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }

  const distanceText = response.json.rows[0].elements[0].distance.text;
  console.log(`The distance between ${origin} and ${destination} is ${distanceText}.`);
});
