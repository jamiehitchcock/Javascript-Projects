// set latitude, longitude and zoom level on map using leaflet
const myMap = L.map('issMap').setView([0,0],1);
const marker = L.marker([0, 0]).addTo(myMap);

const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(myMap);

const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544?units=miles";

async function getISSLocation(){
    const response = await fetch(issApiUrl);
    const data = await response.json();
    const { altitude, velocity, latitude, longitude, visibility} = data;

    console.log(data);
    
    // set the marker to the current ISS position
    marker.setLatLng([latitude, longitude]);

    document.getElementById("alt").textContent = altitude;
    document.getElementById("vel").textContent = velocity;
    document.getElementById("lat").textContent = latitude;
    document.getElementById("lon").textContent = longitude;
    document.getElementById("vis").textContent = visibility;
};
getISSLocation();

