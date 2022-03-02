// set latitude, longitude and zoom level on map using leaflet
const myMap = L.map('issMap').setView([51.509865,-0.118092],3.5);

// Making a marker with a custom icon
const issIcon = L.icon({
    iconSize: [100, 64],
    // set anchor in middle of icon, (50% of the size)
    iconAnchor: [50, 32]
  });
// add markers to map using latitude and longitude
const beijing = L.marker([39.916668, 116.383331]).addTo(myMap);
const cuba = L.marker([20.8795, -76.26306]).addTo(myMap);
const florida = L.marker([27.994402, -81.760254]).addTo(myMap);
const hongKong = L.marker([22.396427, 114.109497]).addTo(myMap);
const india = L.marker([27.173891, 78.042068]).addTo(myMap);
const kenya = L.marker([0.1521, 37.3084]).addTo(myMap);
const london = L.marker([51.509865, -0.118092]).addTo(myMap);
const mexico = L.marker([20.676403961, -88.5678543952]).addTo(myMap);
const newYork = L.marker([40.730610, -73.935242]).addTo(myMap);
const paris = L.marker([48.864716, 2.349014]).addTo(myMap);






// turn into Array, loop through and add to map
// names as keys and coordinates as values





// add attribution for using openstreetmap
const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// lat, long and zoom level determine the tiles to apply to map
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(myMap);


kenya.addEventListener("click",function(){
  console.log("KENYA CLICKED");
}); 