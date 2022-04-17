if("geolocation" in navigator){
    console.log("geolocation is available");
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        // console.log(position.coords.longitude);
        const lat = position.coords.latitude;
        document.getElementById('latitude').textContent = lat;
        const long = position.coords.longitude;
        document.getElementById('longitude').textContent = long;
    });
}
else{
    console.log("geolocation is not available");
}