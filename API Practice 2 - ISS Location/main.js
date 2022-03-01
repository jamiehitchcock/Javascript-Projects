

const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544?units=miles";

async function getISSLocation(){
    const response = await fetch(issApiUrl);
    const data = await response.json();
    const { latitude, longitude, velocity, visibility} = data;


    console.log(data);
    console.log(`latitude is ${latitude}`);
    console.log(`longitude is ${longitude}`);

    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("lon").innerHTML = longitude;
    document.getElementById("vel").innerHTML = velocity;
    document.getElementById("vis").innerHTML = visibility;
};
getISSLocation();

