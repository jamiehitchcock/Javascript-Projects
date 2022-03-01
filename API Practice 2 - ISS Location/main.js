// set latitude, longitude and zoom level on map using leaflet
const myMap = L.map('issMap').setView([0,0],1.5);

// Making a marker with a custom icon
const issIcon = L.icon({
    iconUrl: 'iss200.png',
    iconSize: [50, 32],
    // set anchor in middle of icon, (50% of the size)
    iconAnchor: [25, 16]
  });
//   add custom marker to map at lat,long 0,0 initially
  const marker = L.marker([0, 0], { icon: issIcon }).addTo(myMap);

// add attribution for using openstreetmap
const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// lat, long and zoom level determine the tiles to apply to map
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(myMap);

const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544?units=miles";

// asynchronous function to fetch iss location
async function getISSLocation(){
    const response = await fetch(issApiUrl);
    const data = await response.json();
    const { altitude, velocity, latitude, longitude, visibility} = data;

    console.log(data);
    
    // set the marker to the current ISS position
    marker.setLatLng([latitude, longitude]);

    // move the map so it is centerred on ISS location
    myMap.setView([latitude, longitude],1.5)

    document.getElementById("alt").textContent = altitude;
    document.getElementById("vel").textContent = velocity;
    document.getElementById("lat").textContent = latitude;
    document.getElementById("lon").textContent = longitude;
    document.getElementById("vis").textContent = visibility;
};
getISSLocation();

